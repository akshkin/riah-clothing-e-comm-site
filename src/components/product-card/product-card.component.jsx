import { useContext } from "react"
import "./product-card.styles.jsx"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import { CartContext } from "../../contexts/cart.context"

import {ProductCardContainer, Footer} from "./product-card.styles"

function ProductCard({product}){
    const {addItemToCart} = useContext(CartContext)
    const {name, price, imageUrl} = product
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button onClick={()=>addItemToCart(product)} buttonType={BUTTON_TYPE_CLASSES.inverted} >Add to cart</Button>

        </ProductCardContainer>
        )
}

export default ProductCard