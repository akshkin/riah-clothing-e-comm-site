import styled from "styled-components"

export const AuthenticationContainer = styled.div`
    max-width: 980px;
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: center;
    align-items: center;
    

    @media (min-width: 900px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`
