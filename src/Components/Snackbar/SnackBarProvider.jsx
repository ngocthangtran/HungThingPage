import { SnackbarProvider } from 'notistack';
import React from 'react';
import { useSelector } from 'react-redux';
import SnackBarNotification from './SnackBarNotification';

function SnackBarProvider(props) {
    //notification
    const { listNotification } = useSelector(state => state.Notification)
    return (
        <SnackbarProvider
            autoHideDuration="3000"
            maxSnack={3}
            anchorOrigin={
                {
                    vertical: 'bottom',
                    horizontal: 'right',
                }
            }
        >
            {
                listNotification.length !== 0 &&
                listNotification.map((item, index) => {
                    const { message, type } = item
                    return (
                        <SnackBarNotification key={index} message={message} type={type} />
                    )
                })
            }
        </SnackbarProvider>
    );
}

export default SnackBarProvider;