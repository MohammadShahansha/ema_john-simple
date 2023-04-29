import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
        .then(result => { })
        .catch(error => console.error(error))
    }
    return (
        <nav className='Header'>
           <img src={logo} alt="" />
           <div>
            <Link to="/">Shop</Link>
            <Link to="/orderRe">Orders</Link>
            <Link to="/manage">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {
                user && <span className='text-color'>Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>
            }
           </div>
        </nav>
    );
};

export default Header;