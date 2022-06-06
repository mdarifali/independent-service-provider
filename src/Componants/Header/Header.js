import React from 'react';
import './Header.css'
import Logo from '../Images/header-logo.svg';
import { signOut } from 'firebase/auth';
import { IoIosContact } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../FirebaseAuth';

const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sti" id='nav-bg'>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className='nav-link active' to='/home'>HOME</Link>
                        <Link className='nav-link' to='/bookingcart'>BOOKING CART</Link>
                        <Link className='nav-link' to='/blogs'>BLOGS</Link>
                        <Link className='nav-link' to='/about'>ABOUT ME</Link>
                            {
                            user ? (<button className='btn btn-outline-warning' onClick={() => signOut(auth)}>Sing Out</button>) : (<Link className='nav-link text-dark fw-bold' to='/login'>LOGIN <IoIosContact className='text-dark fs-2 pb-1'/></Link>)
                            }
                        <li className='nav-link fw-bold text-info'>{user?.email}</li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;