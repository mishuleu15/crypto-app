import React, { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../redux/services/coinsData';

import { Row, Col, Card, Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import millify from 'millify';

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCoinsQuery([]);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (location.pathname === '/') {
      setCryptos(cryptoList?.data?.coins.slice(0, 10));
    } else {
      const filteredData = cryptoList?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    }
  }, [cryptoList, searchTerm]);

  if (cryptos === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='cryptocurrencies-container'>
        <div className='search-crypto'>
          {location.pathname === '/cryptocurrencies' && (
            <Input
              placeholder='Search Cryptocurrency'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
        <Row gutter={[32, 32]}>
          {cryptos.map((currency) => {
            return (
              <Col xs={24} sm={12} lg={6} key={currency.uuid}>
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img
                        className='crypto-image'
                        src={currency.iconUrl}
                        alt={currency.name}
                      />
                    }
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Markets: {millify(currency.numberOfMarkets)}</p>
                    {/* <p>Daily Change: {millify(currency.change)}</p> */}
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
};

export default Cryptocurrencies;
