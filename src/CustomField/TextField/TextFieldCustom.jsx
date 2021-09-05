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
        margin:'1rem 0'
    },

}))(TextField);

function TextFieldCustom(props) {
    const {
        field,
        label, type
    } = props
    return (
        <Text label={label} type={type} variant="outlined" fullWidth
            {
            ...field
            }
        />
    );
}

export default TextFieldCustom;