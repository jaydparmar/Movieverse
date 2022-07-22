import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const UnProtectedRoutes = () => {
    const {user}=useSelector((state)=>(
        state.user
    ));
    return (
            user ? <Navigate to='/' /> : <Outlet />
    )
}

export default UnProtectedRoutes