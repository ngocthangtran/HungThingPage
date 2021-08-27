import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Avatar, Badge, withStyles } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -6,
        top: 20,
        padding: '0 4px',
        width: '2.5em',
        height: '1.5em',
        backgroundColor: '#f39c12'
    },
}))(Badge);

const StyledAvt = withStyles((theme) => ({
    root: {
        marginRight: '1rem'
    },
}))(Avatar);

const StyledBt = withStyles((theme) => ({
    root: {
        marginLeft: '2.5rem',
        borderRadius:'unset',
        fontSize:'1rem',
        fontWeight:600,
        color:'#ffffff'
    },
}))(IconButton);

function Info(props) {
    return (
        <>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color='secondary'>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <StyledBt>
                <StyledAvt />
                Sign In
            </StyledBt>
        </>
    );
}

export default Info;