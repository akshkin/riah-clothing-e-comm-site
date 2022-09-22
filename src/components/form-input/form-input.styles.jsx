import styled, { css } from "styled-components"
const subColor = "grey";
const mainColor = "black"

const shrinkLabel = css`
  top: -14px;
  font-size: 0.75rem;
  color: ${mainColor};
`
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  /* left: 5px; */
  top: -10px;
  transition: 300ms ease all;
  ${({shrink}) => shrink && shrinkLabel};
    
`
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.125rem;
  padding: 0.625em 0.625em 0.625em 0.3125em;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.56em 0;

  &:focus {
      outline: none;
}

  &:focus ~ ${FormInputLabel} {
      ${shrinkLabel};
    }
`
export const Group = styled.div`
  position: relative;
  margin: 2.8125em 0;

  input[type='password'] {
  letter-spacing: 0.3em;
  }

`
