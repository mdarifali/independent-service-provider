import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className='nav-link active' to='/home'>HOME</Link>
                        <Link className='nav-link' to='/booking'>BOOK ONLINE</Link>
                        <Link className='nav-link' to='/services'>SERVICES</Link>
                        <Link className='nav-link' to='/login'>LOGIN</Link>
                        <Link className='nav-link' to='/singup'>SING UP</Link>
                        <Link className='nav-link' to='/about'>ABOUT ME</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;