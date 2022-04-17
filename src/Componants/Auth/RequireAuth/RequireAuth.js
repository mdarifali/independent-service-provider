import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../../FirebaseAuth';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation ();

    if (user) {
        
        return children;
    }

    else{

        return <Navigate to='/login' state={{form: location}} replace/>
    }
};

export default RequireAuth;