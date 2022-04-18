import React from 'react';
import BannerImg from '../Images/banner.webp';
import Products from '../Products/Products';
import UseHook from '../UseHook/UseHook';

const Home = () => {

    const [data, setData] = UseHook([]);

    return (
        <div className='container-fluid p-0'>
            <img className='img-fluid' src={BannerImg} alt="" />

            <section className='container my-5'>
                <div className="row g-5">
                        {
                            data.map(product => <Products
                                key={product.id}
                                product={product}
                            />)
                        }
                </div>
            </section>
        </div>
    );
};

export default Home;