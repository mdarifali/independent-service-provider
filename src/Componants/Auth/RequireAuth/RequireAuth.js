import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../FirebaseAuth';

const RequireAuth = (children) => {
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        return (
            <div>
                <p>Current User: {user.email}</p>
                <button onClick={logout}>Log out</button>
            </div>
        );
    }
    return <button onClick={login}>Log in</button>;
};

export default RequireAuth;