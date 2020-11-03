import React from 'react'
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({ id, price, image, title, rating, hideButton }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>Rs. </small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                   {
                       Array(rating).fill().map((x)=> (
                           <p>🌟</p>
                       )) 
                   } 
               </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
        </div>

        </div>
    )
}

export default CheckoutProduct
