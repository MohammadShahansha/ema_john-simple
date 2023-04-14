import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='Header'>
           <img src={logo} alt="" />
           <div>
            <Link to="/">Shop</Link>
            <Link to="/orderRe">Orders</Link>
            <Link to="/manage">Inventory</Link>
            <Link to="/login">Login</Link>
           </div>
        </nav>
    );
};

export default Header;