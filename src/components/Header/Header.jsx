import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='Header'>
           <img src={logo} alt="" />
           <div>
            <a href="/shop">Order</a>
            <a href="/orderRe">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            <a href="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;