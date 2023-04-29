import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({Children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span>Loading.....</span>
    }
    if(user){
        return Children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;