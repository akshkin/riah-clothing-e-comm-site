import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
    padding: 0.975em 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    .checkout-item-info{
        display: flex;
        justify-content: space-between;
        gap: 1em;

        .arrow {
        cursor: pointer;
        }

        .remove-btn {
        padding-left: 12px;
        cursor: pointer;
        }
    }

   @media (min-width: 700px){ 
    width: 100%;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    font-size: 1.25rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .img-container {
        width: 38%;
    
        img {
        width: 100%;
        height: 100%;
        }
    }

    .checkout-item-info{
        width: 60%;
    }

    .name,
    .quantity,
    .price {
        width: 23%;
    }

    .quantity {
        display: flex;

        

        .value {
            margin: 0 10px;
        }
    }

    
    }
`

