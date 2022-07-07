import React from 'react';
import { Collapse, Typography, Image } from 'antd';

import { useGetCoinExchangesQuery } from '../redux/services/cryptoData';

const { Panel } = Collapse;
const { Title, Text } = Typography;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Exchanges = () => {
  const { data } = useGetCoinExchangesQuery([]);
  const onChange = (key) => {
    console.log(key);
  };

  console.log({ data });

  if (data === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {data.map((coin, index) => (
          <>
            <Image
              width={20}
              src={`${coin.image}`}
              className='img'
              preview={false}
            />
            <Collapse
              defaultActiveKey={[`${coin.id}`]}
              onChange={onChange}
              className='collapse'
            >
              <Panel
                header={`${index}. ${coin.name}`}
                key={`${coin.id}`}
                showArrow={false}
                className='panel'
              >
                <p>{coin.country}</p>
              </Panel>
            </Collapse>
          </>
        ))}
      </div>
      // <Collapse defaultActiveKey={`${data.id}`} onChange={onChange}>
      //   {data.map((coin, index) => {
      //     return (
      //       <Panel
      //         header={`${index}${'.'} ${coin.name}`}
      //         key={`${coin.id}`}
      //         showArrow={false}
      //       >
      //         <Text>{coin.name}</Text>
      //       </Panel>
      //     );
      //   })}

      // <Collapse defaultActiveKey={`${data.id}`} onChange={onChange}>
      //   {data.map((coin, index) => {
      //     return (
      //       <Panel
      //         header={`${index}${'.'} ${coin.name}`}
      //         key={`${coin.id}`}
      //         showArrow={false}
      //       >
      //         <Text>{coin.name}</Text>
      //       </Panel>
      //     );
      //   })}
      // </Collapse>
    );
  }
};

export default Exchanges;
