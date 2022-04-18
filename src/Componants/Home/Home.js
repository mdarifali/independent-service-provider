import React from 'react';
import BannerImg from '../Images/banner.webp';
import Products from '../Products/Products';
import UseHook from '../UseHook/UseHook';
import Booking from '../Booking/Booking';

const Home = () => {

    const [data, setData] = UseHook([]);
    const [cart, setCart] = UseHook([]);

    const handleBooking = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='container-fluid p-0'>
            <img className='img-fluid' src={BannerImg} alt="" />
            <section className='container my-5'>
                <div className="row g-5">
                        {
                            data.map(product => <Products
                                key={product.id}
                                product={product}
                                handleBooking={handleBooking}
                            />)
                        }
                </div>
            </section>
            {
                cart.map(pd => <Booking 
                
                    key={pd.id}
                    pd={pd}
                />)
            }
        </div>
    );
};

export default Home;