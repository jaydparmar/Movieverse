import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const {user}=useSelector((state)=>(
        state.user
    ));
    return (
            user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes
