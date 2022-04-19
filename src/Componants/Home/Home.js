import React, { useState } from 'react';
import bannerimg1 from '../Images/banner1.jpg';
import bannerimg2 from '../Images/banner2.jpg';
import bannerimg3 from '../Images/banner3.jpg';
import centerimg from '../Images/center-img.webp'
import Products from '../Products/Products';
import UseHook from '../UseHook/UseHook';

const Home = () => {

    const [data] = UseHook();
    const [cart, setCart] = useState([]);

    const handleBooking = (items) => {
        const newCart = [...cart, items];
        setCart(newCart);

    }

    return (
        <div className='container-fluid p-0'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerimg1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimg2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimg3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

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
            <section >
                <img className='img-fluid w-100' src={centerimg} alt="" />
            </section>
        </div>
    );
};

export default Home;