import {useContext} from "react"
import { CartContext } from "../../contexts/cart.context"

import {CheckoutItemContainer} from "./checkout-item.styles.jsx"


function CheckoutItem({cartItem}){
const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)

    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CheckoutItemContainer>
            <div className="img-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <div className="checkout-item-info">
                <span className="name">{name}</span>
                <div className="arrow" onClick={()=>removeItemFromCart(cartItem)} aria-label="decrease quantity">&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItemToCart(cartItem)} aria-label="increase quantity">&#10095;</div>
                <span className="price">{price}</span>
                <div onClick={()=>clearItemFromCart(cartItem)} className="remove-btn" aria-label="clear item from cart">&#10005;</div>
            </div>
            
        </CheckoutItemContainer>

    )
}

export default CheckoutItem