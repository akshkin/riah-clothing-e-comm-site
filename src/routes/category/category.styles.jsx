import styled from "styled-components"

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    justify-content: center;
    grid-gap: 3.125em 1.25em;

`
export const CategoryTitle = styled.h2`
    font-size: 2.375rem;
    margin-bottom: 1.5625em;
    text-align: center;
`