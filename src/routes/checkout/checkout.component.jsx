import {useContext} from "react"
import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import PaymentForm from "../../components/payment-form/payment-form.component"
import {CheckoutContainer} from  "./checkout.style"

function Checkout(){
    const {cartItems, cartTotal} = useContext(CartContext)
    return(
        <CheckoutContainer>
            <div>
                <h2>Checkout</h2>
                <div>
                    {cartItems.map( cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    ))}
                </div>
            </div>
            <span className="total">Total: ${cartTotal}</span>
            <PaymentForm />
        </CheckoutContainer>
        

    )
}

export default Checkout