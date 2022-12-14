import  { useState } from 'react'
import { 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'



import {SignInContainer} from "./sign-in-form.styles.jsx"

const defaultFormFields = {
    email: '',
    password: ''
}

function SignInForm(){
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields


    function resetFormFields(){
        setFormFields(defaultFormFields)
    }
    async function signInWithGoogle(){
        await signInWithGooglePopup()
        
    }
    async function handleSubmit(event){
        event.preventDefault()
        
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error){
            switch(error.code){
                case 'auth/wrong-password' :
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found' :
                    alert ('no user associated with this email')
                    break
                default :
                    console.log(error)
            }
                         
        }
    }

    function handleChange(event){
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput
                label = "Email" 
                type="email" 
                required  
                onChange={handleChange}
                name="email" 
                value={email}
                />
              
                <FormInput 
                label ="Password"
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
                
            </form>
        </SignInContainer>
    )
}

export default SignInForm

