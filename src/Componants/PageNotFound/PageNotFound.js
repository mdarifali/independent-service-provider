import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import PageNotFoundImg from '../Images/404.jpg';

const PageNotFound = () => {

    return (
        <div className='container'>
            <div className='card position-relative'>
                <img className='img-fluid w-100' src={PageNotFoundImg} alt="" />
                <div className='fs-1 bg-danger p-3' id='home-btn'>
                    <Link className='text-light' to='/'>GO TO HOME PAGE</Link>
                </div>
            </div>
        
        </div>
    );
};

export default PageNotFound;