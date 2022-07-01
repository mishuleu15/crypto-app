import React from 'react';

import { Link } from 'react-router-dom';

import { useGetCryptoExchangeQuery } from '../redux/services/cryptoData';

import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery('');

  if (isFetching) return 'Loading ...';

  return (
    <>
      <div className='homepage-container'>
        <Title level={2}>Global Crypto Statistic</Title>
        <Row>
          <Col span={12}>
            <Statistic
              title='Total Cryptocurrency'
              value={data.data.active_cryptocurrencies}
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='Total 24h Volume'
              value={millify(data.data.market_cap_change_percentage_24h_usd)}
            />
          </Col>
          <Col span={12}>
            <Statistic title='Total Markets' value={data.data.markets} />
          </Col>
        </Row>
        <div className='home-heading-container'>
          <Title level={2} className='home-title'>
            Top 10 Cryptocurrencies in the world
          </Title>
          <Title level={3} className='show-more'>
            <Link to='/cryptocurrencies'>Show More</Link>
          </Title>
        </div>
        <Cryptocurrencies />
        <div className='home-heading-container'>
          <Title level={2} className='home-title'>
            Latest Crypto News
          </Title>
          <Title level={3} className='show-more'>
            <Link to='/news'>Show More</Link>
          </Title>
        </div>
        <News simplified />
      </div>
    </>
  );
};

export default Homepage;
