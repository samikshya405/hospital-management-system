import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchUserInfo } from '../../utils/axiosHelper';
import { getUser } from '../../redux/features/userSlice';
// import { setUser } from '../../redux/userSlice';

const ProtectedRoutes = ({ children, roles }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    

    if (!localStorage.getItem("refreshJWT")) {
        return <Navigate to='/login' />;
    }

    if (roles && roles.length && user?.department && !roles.includes(user.department.toLowerCase())) {
        return <Navigate to='/unauthorized' />;
    }

    return children;
};

export default ProtectedRoutes;
