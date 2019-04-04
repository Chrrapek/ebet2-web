import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const CustomFormControl = (props) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={props.purpose}>{props.children}</InputLabel>
            <Input id={props.purpose} type={props.purpose} name={props.purpose} onChange={props.handler}
                   autoComplete={props.purpose} autoFocus/>
        </FormControl>
    )
};

export default CustomFormControl;
