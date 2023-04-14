import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './Order.css';
const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='product-item'>
                {
                    cart.map(product => <RevewItem
                        key={product.id}
                        product={product}
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