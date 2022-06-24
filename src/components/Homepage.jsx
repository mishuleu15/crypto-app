import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import { useGetCryptoExchangeQuery } from '../redux/services/cryptoData';

import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

const Homepage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetCryptoExchangeQuery('');

  console.log(data);

  const {
    markets,
    market_cap_change_percentage_24h_usd: total24hvolume,
    active_cryptocurrencies,
  } = data?.data;

  const { total_volume } = data?.data;

  const totalMarketCap = Object.values(total_volume).reduce((acc, val) => {
    return acc + val;
  }, 0);

  console.log(millify(totalMarketCap));

  // 48629300526269496
  // 9007199254740991

  return (
    <div className='homepage-container'>
      <Title level={2}>Global Crypto Statistic</Title>
      <Row>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrency'
            value={active_cryptocurrencies}
          />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={5} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={5} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={millify(total24hvolume)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={markets} />
        </Col>
      </Row>
      <div>
        <div>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
