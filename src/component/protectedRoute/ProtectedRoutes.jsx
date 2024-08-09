import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, roles }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    console.log("this is user", user);

    
    if (!user || !user.department) {
        
        return <div>Loading...</div>;
      }

    
    if (!localStorage.getItem("refreshJWT")) {
        return <Navigate to='/login' />;
    }

    // Check if the user's role matches one of the allowed roles
    if (roles && roles.length && !roles.includes(user.department.toLowerCase())) {
        return <Navigate to='/unauthorized' />; 
    }

    return children;
};

export default ProtectedRoutes;
