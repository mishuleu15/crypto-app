import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetCoinExchangesQuery } from '../redux/services/cryptoData';

const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
  const { data } = useGetCoinExchangesQuery([]);

  const description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, vero assumenda temporibus magnam eveniet reiciendis rerum amet culpa alias! Atque! Lorem ipsum dolor sit amet consectetur adipisicing elit. In, molestiae beatae saepe itaque ipsum nisi autem deleniti maiores quod? Voluptas voluptates voluptatem officia consectetur iure quis incidunt vitae ipsa porro!';

  if (data === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='exchange-container'>
        <Row className='exchange-header'>
          <Col span={6}>Exchanges</Col>
          <Col span={6}>24h Trade Volume</Col>
          <Col span={6}>Markets</Col>
          <Col span={6}>Change</Col>
        </Row>
        {data.map((exchange, index) => (
          <>
            <Col span={24}>
              <Collapse>
                <Panel
                  key={exchange.id}
                  showArrow={false}
                  header={
                    <Row key={exchange.id}>
                      <Col span={6}>
                        <Text>
                          <strong className='score-rank'>
                            {exchange.trust_score_rank}.
                          </strong>
                        </Text>
                        <Avatar
                          className='exchange-image'
                          src={exchange.image}
                        />
                        <Text>
                          <strong>{exchange.name}</strong>
                        </Text>
                      </Col>
                      <Col span={6}>
                        ${millify(exchange.trade_volume_24h_btc)}
                      </Col>
                    </Row>
                  }
                >
                  {HTMLReactParser(description || '')}
                </Panel>
              </Collapse>
            </Col>
          </>
        ))}
      </div>
    );
  }
};

export default Exchanges;
