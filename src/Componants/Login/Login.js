import React from 'react';
import './Login.css';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Login = () => {

    return (
        <section className="vh-100">
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light text-dark">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-4 mt-md-4 pb-4">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-dark-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' />
                                    </div>

                                    <p className="small mb-3 pb-lg-2"><a className="text-dark-50" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-success btn-lg px-5" type="submit">Login</button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-dark"><FiFacebook className='fs-4' /></a>
                                        <a href="#!" className="text-dark"><AiOutlineGoogle className='fs-4 mx-2' /></a>
                                        <a href="#!" className="text-dark"><AiOutlineGithub className='fs-4' /></a>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-dark-50 fw-bold">Sign Up</a>
                                    </p>
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
