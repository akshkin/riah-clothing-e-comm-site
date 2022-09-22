import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"
import {BagIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx"

function CartIcon(){
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    

    function toggleCartDropdown(){
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCartDropdown}>
            <BagIcon className="bag-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon