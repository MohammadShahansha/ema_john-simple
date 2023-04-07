import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart)
    {
        if(product.quantity===0){
            product.quantity=1;
        }
        total = total+product.price * product.quantity;
        totalShipping = totalShipping+product.shipping
        quantity = quantity + product.quantity;
    }
    const totalTex = (total*7)/100;
    const grandTotal = total + totalShipping + totalTex;
    return (
        <div className='cart'>
            <h3>this is cart container</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${totalShipping}</p>
            <p>Tax:${totalTex.toFixed(2)}</p>
            <h5>Grant Total:${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;