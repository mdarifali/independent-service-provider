import React, { useEffect, useState } from 'react';


const Cart = (product) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {

        fetch("data.json")
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Cart;