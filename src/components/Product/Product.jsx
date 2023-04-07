import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, quantity, price } = props.product;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='products-name'>{name}</h6>
                <p className='price-feild'>Price:${price}</p>
                <div>
                    <p className='seller'>Manufactruer:{seller}</p>
                    <p className='rating'>Rating:{quantity} star</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='add-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;