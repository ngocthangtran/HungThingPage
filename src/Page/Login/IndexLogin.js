import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import Login from './Login/Login';

function IndexLogin(props) {
    const { open, close } = props
    const handleClose = () => {
        close()
    };


    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="xs"
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
        >
            <DialogTitle
                id="simple-dialog-title"
                style={{ textAlign: 'center' }}
            >
                Đăng nhập
            </DialogTitle>
            <DialogContent>
                <Login />
            </DialogContent>
        </Dialog>
    );
}

export default IndexLogin;