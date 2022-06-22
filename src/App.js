import React from 'react';
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';

import { Routes, Route, Link } from 'react-router-dom';

import { Layout, Typography, Space, Menu } from 'antd';

import './App.css';

const App = () => {
  return (
    <>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Homepage />} />

                <Route exact path='/exchanges' element={<Exchanges />} />

                <Route
                  exact
                  path='/cryptocurrencies'
                  element={<Cryptocurrencies />}
                />

                <Route
                  exact
                  path='/crypto/:coinId'
                  element={<CryptoDetails />}
                />

                <Route exact path='/news' element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
      <div className='footer'>
        <Menu theme='dark' style={{ padding: '1rem' }}>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            CryptoNews <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </Menu>
      </div>
    </>
  );
};

export default App;
