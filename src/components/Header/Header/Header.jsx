import React from 'react';
import './_Header.scss';
import Logo from './../../../images/Logo.svg';

export default function Header() {
  return (<div className="header">
    <img src={Logo} alt=""/>
    <div className="header__nav">
      <a href="/shop">Shop</a>
      <a href="/orders">Orders</a>
      <a href="/inventory">Inventory</a>
      <a href="/about">About</a>
    </div>
  </div>);
}
