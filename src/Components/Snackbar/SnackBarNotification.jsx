import React, { useEffect, Fragment } from 'react';
import { useSnackbar } from 'notistack';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function SnackBarNotification(props) {
    const { message, type } = props
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    useEffect(() => {
        enqueueSnackbar(
            message,
            {
                variant: type,
                action: (key) => (
                    <Fragment>
                        <IconButton onClick={() => closeSnackbar(key)}>
                            <CloseIcon />
                        </IconButton>

                    </Fragment>
                )
            },

        );
    }, [message, type, closeSnackbar, enqueueSnackbar])
    return (
        <></>
    );
}

export default SnackBarNotification;