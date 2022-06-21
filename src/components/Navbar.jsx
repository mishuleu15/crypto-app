import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import icon from '../images/logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2}>
          <Link to='/'>CryptoNews</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />} key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key='2'>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key='3'>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key='4'>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
