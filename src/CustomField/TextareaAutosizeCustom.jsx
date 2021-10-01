import { TextareaAutosize } from '@material-ui/core';
import React from 'react';

function TextareaAutosizeCustom(props) {
    const { field, label } = props;
    return (
        <TextareaAutosize
            maxRows={4}
            minRows={4}
            placeholder={label}
            {...field}
            style={{
                width: '100%',
                height: '100%',
                padding: '10px',

            }}
        />
    );
}


export default TextareaAutosizeCustom;