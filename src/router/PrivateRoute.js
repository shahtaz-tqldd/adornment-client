import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import './spinner.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div class="lds-dual-ring"></div>
    }
    
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
}

export default PrivateRoute