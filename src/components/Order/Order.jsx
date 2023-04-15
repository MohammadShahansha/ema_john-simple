import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);

    const handleRemoveFromeCart = (id) =>{
        const remaining = cart.filter(product => product.id!==id)
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='product-item'>
                {
                    cart.map(product => <RevewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromeCart={handleRemoveFromeCart}
                    ></RevewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Order;