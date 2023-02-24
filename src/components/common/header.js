import { NavLink } from "react-router-dom";
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

import {
  MobileOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container'>
      {/* topbar */}
      <div className='topBar'>
        <div className='contactInfo'>
          <ul>
            <li><a href="tel:7764806821"><MobileOutlined /> <span>7764806821</span></a></li>
            <li><a href="mailto:support@raj.grocery.com"><MailOutlined /> <span>support@raj.grocery.com</span></a></li>
          </ul>
        </div>
        <div className='otherInfo'>
          <ul className='socialMedia'>
            <li><a href='https://www.facebook.com'><FacebookFilled /></a></li>
            <li><a href='https://www.twitter.com'><TwitterSquareFilled /></a></li>
            <li><a href='https://www.instagram.com'><InstagramFilled /></a></li>
          </ul>
          <button><UserOutlined /> My Account</button>
        </div>
      </div>
      {/* header */}
      <div className='header separator'>
        <div className="logo">
          Raj Grocery Store
        </div>  
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <nav>
              <ul>
            
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/">Home</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/about">About</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/shop">Shop</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/faq">FAQ</NavLink></li>
                <li><NavLink onClick={onClose} to="/demo/react/antdesign/grocery/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
          <ul>
            
            <li><NavLink to="/demo/react/antdesign/grocery/">Home</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/about">About</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/shop">Shop</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/faq">FAQ</NavLink></li>
            <li><NavLink to="/demo/react/antdesign/grocery/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;