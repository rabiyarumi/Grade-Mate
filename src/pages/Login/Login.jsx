import React, { useContext } from 'react';
import AuthContext from '../../providers/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {

    const { userLogin} = useContext(AuthContext);

    return (
        <div>
            Login
            <Link to={"/register"}>register</Link>
        </div>
    );
};

export default Login;