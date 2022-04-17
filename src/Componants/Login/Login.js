import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../FirebaseAuth';

const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ();

    const [ signInWithEmailAndPassword, user, loading, hookerror] = useSignInWithEmailAndPassword (auth);

    const handelEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail){
            setEmail(e.target.value);
        }
        else{
            setError('Please Enter Valid Email!');
        }
    };

    const handelPasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if (validPassword) {
            setEmail(e.target.value);
        }
        else {
            setError('Please Enter Valid Password!');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <section className="vh-100">
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light text-dark">
                            <div className="card-body px-5 py-3 text-center">
                                <form onSubmit={handleLogin} className="mb-md-4 mt-md-4 pb-2">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-dark-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' onChange={handelEmailChange} required/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' onChange={handelPasswordChange} required/>
                                    </div>

                                    <p className="small mb-3 pb-lg-2"><a className="text-danger" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-success btn-lg px-5" type="submit">Login</button>
                                    {error && <p className='text-danger text-center my-4'>{error}</p>}
                                </form>
                                <SocialLogin />
                                <div className='pt-3'>
                                    <Link className="nav-link text-dark-50 fw-bold mb-0" to='/singup'>Don't have an account? Sign Up</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
