import React from 'react';
import './SocialLogin.css'
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAuth';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle (auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate ();

    if (error || error1) {
        return (
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
        );
    }

    if (loading || loading1) {
        return <p>Loading...</p>;
    }

    if (user || user1) {
        return navigate('/home');
    }

    return (
        <div className="d-flex justify-content-center text-center mt-4 pt-1">
            <button
                onClick={() => signInWithGoogle()}
                className=" btn text-dark"><AiOutlineGoogle className='fs-4 mx-2' />
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="btn"><AiOutlineGithub className='text-dark fs-4' />
            </button>
            <button className="btn text-dark"><FiFacebook className='fs-4' /></button>
        </div>
    );
};

export default SocialLogin;