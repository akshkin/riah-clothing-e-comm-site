import {FormInputLabel, Input, Group } from './form-input.styles.jsx'
function FormInput({label, ...otherProps}){
    return (
        <Group>
            <Input className="form-input" {...otherProps} />
            {label &&(
            <FormInputLabel 
                shrink = {otherProps.value.length > 0 ? "shrink" : ""}
            
            > 
            {label} 
            </FormInputLabel>)
            }
            
        </Group>
    )
}

export default FormInput