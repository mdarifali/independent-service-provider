import React, { useEffect, useState } from 'react';
import './Login.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../FirebaseAuth';
import GoogleAuth from '../SocialLogin/GoogleAuth';

const Login = () => {

    const [userInfo, setUserInfo] = useState ({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState ({
        email:'',
        password:""
    });

    const [ signInWithEmailAndPassword, user, loading, hookerror] = useSignInWithEmailAndPassword (auth);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    useEffect(() => {

        if (user) {
            navigate(form);
        }
        
    }, [user])

    const handelEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail){
            setUserInfo({ ...userInfo, email: e.target.value});
            setErrors({...errors, email: '' })
        }
        else{
            setErrors({...errors, email: 'Please Enter Valid Email!'});
            setUserInfo({ ...userInfo, email: '' });
        }
    };

    const handelPasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'Min 8 characters, at least 1 letter, 1 number and 1 special character!'});
            setUserInfo({ ...userInfo, password: '' });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
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
                                        <input type="email" className="form-control form-control-lg" placeholder='Email' onChange={handelEmailChange} required/>
                                        {errors?.email && <p className='text-danger text-start my-2'>{errors.email}</p>}
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Password' onChange={handelPasswordChange} />
                                        {errors?.password && <p className='text-danger text-start my-2'>{errors.password}</p>}
                                    </div>

                                    <p className="small mb-3 pb-lg-2"><a className="text-danger" href="#!">Forgot password?</a></p>

                                    <div className="d-grid">
                                        <button className="btn btn-success p-2" type="submit"><FiLogIn className='fs-5'/> Login</button>
                                    </div>
                                    {/* {hookerror && <p className='text-danger text-center my-4'>{hookerror}</p>} */}
                                </form>
                                <GoogleAuth />
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
