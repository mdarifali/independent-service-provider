import React from 'react';

const Booking = ({pd}) => {
    console.log(pd);
    const { name, img, price, description, duration } = pd;

    return (
        <div className="card shadow-lg h-100">
            <div>
                <img src={img} className="img-fluid card-img-top" alt='' />
            </div>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h4 className="card-text">Duration: {duration}</h4>
                <h5 className="card-text">Price: ${price}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Booking;