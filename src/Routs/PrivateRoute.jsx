/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AuthContext from '../providers/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-16 my-auto text-black">
       <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{from:location.pathname}} to={"/login"}></Navigate>;
  }



    return children;
};

export default PrivateRoute;