import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


TextFieldCustom.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,

    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
};

TextFieldCustom.defaultProps = {
    label: 'no name',
    type: 'text',

    field: null,
    form: null
}

const Text = withStyles((theme) => ({
    root: {

    },

}))(TextField);

function TextFieldCustom(props) {
    const {
        field, form,
        label, type
    } = props
    const { errors, touched } = form;

    const showErr = errors[field.name] && touched[field.name];
    return (
        <Text label={label} type={type} variant="outlined" fullWidth
            {
            ...field
            }
            error={showErr?true:false}
            helperText={showErr && errors[field.name]}
        />
    );
}

export default TextFieldCustom;