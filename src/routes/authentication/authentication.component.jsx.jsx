//import { useEffect } from 'react'
//import { getRedirectResult } from 'firebase/auth'
// import { 
//     //auth, 
//     signInWithGooglePopup, 
//     signInWithGoogleRedirect, 
//     createUserDocumentFromAuth 
// } from '../../../utils/firebase/firebase.utils'


import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import {AuthenticationContainer} from "./authentication.styles.jsx"

function Authentication(){

    // const signInRedirect = async () =>{
    //     const response = await getRedirectResult(auth)
    //     console.log(response)

    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }
    // useEffect(() => async () => {
    //    const response = await getRedirectResult(auth)
    //     console.log(response)
    
    // }, [])

   

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect()
    //     console.log({user})
    // }
    return(
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication
//