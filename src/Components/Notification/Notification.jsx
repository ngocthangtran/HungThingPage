import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

Notification.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func.isRequired
};

Notification.defaultProps = {
    open: null,
    close: null
}

function Notification(props) {
    const { open, close } = props;
    return (
        <Dialog open={open} onBlur={close}>
            <DialogTitle>Thông báo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Bạn phải đăng nhập để có thể mua hàng online. Nếu bạn đang ở nhà hàng vui lòng
                    quét mã QR trên mặt bàn để có thể tiến hành oder
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='primary'>Xác nhận</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Notification;