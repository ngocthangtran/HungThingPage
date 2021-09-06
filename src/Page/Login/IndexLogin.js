import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import InfoUser from './Components/Infouser/InfoUser';
import Login from './Components/LoginForm/Login';

function IndexLogin(props) {
    const { open, close } = props
    const handleClose = () => {
        close()
    };

    //check user - if user exits then show info user else show login form
    const { desk } = useSelector(state => state.DeskReducer);

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="xs"
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
        >
            {
                !desk &&
                <>
                    <DialogTitle
                        id="simple-dialog-title"
                        style={{ textAlign: 'center' }}
                    >
                        Đăng nhập
                    </DialogTitle>
                    <DialogContent>
                        <Login />
                    </DialogContent>
                </>
            }
            {
                desk &&
                <>
                    <DialogTitle
                        id="simple-dialog-title"
                        style={{ textAlign: 'center' }}
                    >
                        Thông tin chi tiết
                    </DialogTitle>
                    <DialogContent>
                        <InfoUser />
                    </DialogContent>
                </>
            }
        </Dialog>
    );
}

export default IndexLogin;