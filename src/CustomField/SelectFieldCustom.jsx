import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

function SelectFieldCustom(props) {
    const {
        field, form,
        label,
        items } = props;
    const { errors, touched } = form;

    const showErr = errors[field.name] && touched[field.name];
    return (
        <FormControl variant="outlined" style={{ width: "100%" }} error={showErr ? true : false}>
            <InputLabel
                id="test"

            >{label}</InputLabel>
            <Select
                labelId="test"
                {
                ...field
                }
                label={label}

            >
                {
                    items.map((item, index) => {
                        const { vl, label } = item;
                        return (
                            <MenuItem value={vl} key={index}>{label}</MenuItem>
                        )
                    })
                }
                <MenuItem value={'add'} >Khác</MenuItem>
            </Select>
            {
                showErr &&
                <FormHelperText>{errors[field.name]}</FormHelperText>
            }
        </FormControl>
    );
}

export default SelectFieldCustom;