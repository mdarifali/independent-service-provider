import React from 'react';
import BannerImg from '../Images/banner.webp';

const Home = () => {
    return (
        <div className='container-fluid'>
            <img className='img-fluid' src={BannerImg} alt="" />
        </div>
    );
};

export default Home;