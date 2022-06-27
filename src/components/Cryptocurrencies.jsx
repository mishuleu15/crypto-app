import React, { useState } from 'react';
import { useGetCoinsQuery } from '../redux/services/coinsData';

import { Row, Col, Card, Input } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCoinsQuery('');
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  if (isFetching) return 'Loading ...';

  console.log(cryptos);
  return (
    <>
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
    </>
  );
};

export default Cryptocurrencies;
