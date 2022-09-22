import styled from "styled-components"

import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles"

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding:1.25em;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, 
    ${GoogleSignInButton}, 
    ${InvertedButton} {
        margin-top: auto;
    } 

`
export const EmptyMessage = styled.span`
    font-size: 1.125rem;
    margin: 3.125em auto;
`
    
export const CartItems = styled.div`
    max-width: 98%;
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`



  