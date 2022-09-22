import {useContext, useState} from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import Button, { BUTTON_TYPE_CLASSES }  from "../button/button.component";

import {PaymentFormContainer, FormContainer} from "./payment-form.style"

function PaymentForm(){
  const stripe = useStripe()
  const elements = useElements()
  const {cartTotal} = useContext(CartContext)
  const {currentUser} = useContext(UserContext)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  async function handlePayment(event){
    event.preventDefault()

    if(!stripe || !elements) return

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({amount: cartTotal * 100})
    }).then (res => res.json())

    //console.log(response)
    const { paymentIntent: {client_secret}} = response 

    console.log(client_secret)

    const paymentResult = await stripe.confirmPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest"
        }
      }
    })
    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded"){
        alert("Payment successfull")
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm