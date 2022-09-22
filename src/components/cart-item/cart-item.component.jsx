import {CartItemContainer, CartItemDetails} from "./cart-item.styles.jsx"

function CartItems({cartItem}){
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <p className="name">{name}</p>
                <span className="price">{quantity} x ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItems