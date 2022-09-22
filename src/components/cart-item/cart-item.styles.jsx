import styled from "styled-components"

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 0.9em;
    gap: 1em;


    img {
        width: 30%;
    }
`
export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.625em, 1.25em;
    margin: auto;


    .name {
        font-size: 1rem;
        margin: 0;
    }
    .price{
        font-size: 0.875rem;
    }

`



  