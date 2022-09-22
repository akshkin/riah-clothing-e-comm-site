import styled from "styled-components"

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875em;

    .title {
        font-size: 1.75rem;
        margin-bottom: 1.5625em;
        cursor: pointer;
    }
    
    .preview {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
        grid-gap: 2em 1em;
        justify-content: center;
    }
`


  
  