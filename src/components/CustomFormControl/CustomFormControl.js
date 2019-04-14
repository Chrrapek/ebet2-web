import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const CustomFormControl = ({purpose, handler, children}) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={purpose}>{children}</InputLabel>
            <Input id={purpose} type={purpose} name={purpose} onChange={handler}
                   autoComplete={purpose} autoFocus/>
        </FormControl>
    )
};

export default CustomFormControl;
