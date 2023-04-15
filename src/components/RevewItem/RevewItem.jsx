import React from 'react';
import './RevewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const RevewItem = ({ product,handleRemoveFromeCart }) => {
    const { id, img, name, price, quantity, shipping} = product;
    return (
        <div className='revew-item'>
            <div className='showOrderInfo'>
                <img src={img} alt="" />
                < div className='revew-details'>
                    <p>{name}</p>
                    <p>Price: <span className='color'>${price}</span></p>
                    <p>Order quantity: <span className='order-quantity'>{quantity}</span></p>

                </div>
            </div>
            <button onClick={()=>handleRemoveFromeCart(id)} className='delete-button'>
                <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default RevewItem;