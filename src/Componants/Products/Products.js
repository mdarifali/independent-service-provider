import React from 'react';

const Products = ({ product }) => {
    const { name, img, price, description, duration} = product;

    return (
        <div className="col-md-4">
            <div className="card shadow-lg h-100">
                <div>
                    <img src={img} className="img-fluid card-img-top" alt='' />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h4 className="card-text">Duration: {duration}</h4>
                    <h5 className="card-text">Price: ${price}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Products;