import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const SingUp = () => {
    return (
        <section className="vh-100">
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-light text-dark">
                            <div className="card-body py-2 text-center">
                                <form className="mb-md-3 mt-md-3 pb-3">
                                    <h2 className="fw-bold mb-2 text-uppercase">Sing Up</h2>
                                    <p className="text-dark-50 mb-5">Please enter your user info!</p>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" placeholder='Name' />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" className="form-control form-control-lg" placeholder='Email' required/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Confirm Password' required/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Password' required/>
                                    </div>

                                    <button className="btn btn-outline-success btn-lg px-5" type="submit">Sing Up</button>
                                    <SocialLogin />
                                </form>

                                <div className='nav-item fw-bold mb-0'>
                                    <Link className="nav-link" to='/login'><span className='text-dark'>Already have an account?</span><span className='text-danger'> Login Hear</span></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingUp;