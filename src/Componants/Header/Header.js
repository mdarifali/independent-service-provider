import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className='nav-link active' to='/home'>HOME</Link>
                        <Link className='nav-link' to='/'>BOOK ONLINE</Link>
                        <Link className='nav-link' to='/'>SERVICES</Link>
                        <Link className='nav-link' to='/'>LOGIN</Link>
                        <Link className='nav-link' to='/'>SING UP</Link>
                        <Link className='nav-link' to='/'>LOGIN</Link>
                        <Link className='nav-link' to='/'>ABOUT ME</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;