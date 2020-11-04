import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {db} from '../firebase';

function Payment() {

    const basket = useSelector(state => state.basket);
    const user = useSelector(state => state.user);
    const city = useSelector(state => state.city);
    const landmark = useSelector(state => state.landmark);
    const pincode = useSelector(state => state.pincode);
    const name = useSelector(state => state.name);
    const phoneno = useSelector(state => state.phoneno);
    const dispatch = useDispatch();
    const history = useHistory();
    
const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc('orderid')
        .set({
            basket: basket,
            amount : getBasketTotal(basket)*100,
            created: Math.round(new Date().getTime()/1000)
        })

    dispatch({
        type: 'EMPTY_BASKET'
    })

    history.replace('/orders');
 
}

const phno = (<p>Phone Number: {phoneno}</p>);
    return (
        <div className='payment'>
            <div className='payment__container'>

            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>

                {/* Payment Section - delievery address */}
                    <div className='payment__section'>
                        <div className='payment__title'>
                            <h3> Delivery address </h3>
                        </div>
                        <div className='payment__address'>
                            <p>Name: {name? (name) :( user?.email)}</p>
                            {/* <p>Phone Number: {phoneno}</p> */}
                            {phoneno? phno:null}
                            <p>Landmark: {landmark}</p>
                            <p>Pincode: {pincode}</p>
                            <p>City: {city}</p>
                        </div>
                    </div>


                {/* Payment section - Review items */}
                    <div className='payment__section'>
                    <div className='payment__title'>
                            <h3> Review Items and delivery </h3>
                        </div>
                        <div className='payment__items'>
                           {basket.map(item => (
                               <CheckoutProduct
                               id={item.id}
                               title={item.title}
                               image = {item.image}
                               price={item.price}
                               rating =  {item.rating}
                               />
                           ))}
                        </div>
                    </div>


                {/* payment section Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3> Payment Method </h3>
                        </div>
                        <div className='payment__details'>
                            {/* stripe magic will come here */}

                            <form onSubmit={handleSubmit}>            
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} 
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rs. "}
                                    />
                                    <button type='submit'>"Buy Now" 
                                    </button>
                                </div>
                            </form>

                        </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
