import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false)
    const { forSignIn } = useContext(AuthContext)
    const Navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname||"/"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        forSignIn(email, password)
        .then(result => {
            const loggedUse = result.user;
            console.log(loggedUse);
            form.reset();
           Navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }
   
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="" placeholder='Your Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">password</label>
                    <input type={show? "text": "password"} name="password" id="" placeholder='Your password' required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='form-footer'>New to Ema-john? <Link to="/signup">Create New Account</Link> </p>
        </div>
    );
};

export default Login;