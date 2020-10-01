import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {

        //brisanje itema iz korpe
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info" >
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarRateIcon />
                            ))
                    }

                </div>

                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
