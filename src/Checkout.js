import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ cart }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <Link to='/'>Shop today's deals</Link>
                        <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping CartLearn more

Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Amazon Cart</h2>

                            {cart.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>

                    )}
            </div>
            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
