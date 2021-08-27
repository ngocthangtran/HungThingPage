import { AppBar, Badge, makeStyles, Toolbar, useMediaQuery, useTheme, withStyles, Avatar, Drawer, Divider, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
const Logo = process.env.PUBLIC_URL + '/logo.png'


const useStyle = makeStyles((theme) => {
    return {
        Appbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 4rem'
        },
        logo: {
            height: '3rem'
        },
        navbar__menu: {
            listStyle: 'none',
            display: 'flex'
        },
        navbar__item: {
            textTransform: 'capitalize',
            marginRight: '5rem',
            display:"flex",
            alignItems:'center',
            "&>svg":{
                marginRight:10
            }
        },

        //style mobile
        AppbarMobile: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        menu: {
            position: 'relative',
            top: 0,
            left: 0
        },
        navbar__menu__mobile: {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            paddingInlineStart: 0
        },
        navbar__item__mobile: {
            fontSize: '1.5rem',
            marginLeft: "1rem",
            textTransform: 'capitalize'
        }
    }
})

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
        marginRight: '1rem',
        marginLeft: '3rem'
    },
}))(Avatar);

const StyledBt = withStyles((theme) => ({
    root: {
        borderRadius: 'unset',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#ffffff'
    },
}))(IconButton);

const StyledBtMobile = withStyles((theme) => ({
    root: {
        borderRadius: 'unset',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'black'
    },
}))(IconButton);

const DrawerStyle = withStyles((theme) => ({
    paper: {
        width: '75%',
    }
}))(Drawer);

const MenuItem = withStyles((theme) => ({
    root: {
        marginLeft: 5
    },
    label: {
        justifyContent: 'end'
    }
}))(Button);

function NavBar(props) {
    const classes = useStyle();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('xs'))
    const [open, isOpen] = useState(false)
    console.log(match)
    return (
        <>
            {
                match ? (
                    <AppBar className={classes.AppbarMobile}>
                        <Toolbar style={{ padding: 0 }}>
                            <IconButton onClick={() => {
                                isOpen(true)
                            }} >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                        <Toolbar>
                            <img src={Logo} alt="" className={classes.logo} />
                        </Toolbar>
                        <Toolbar style={{ padding: "0 1rem 0 0" }}>
                            <IconButton >
                                <StyledBadge badgeContent={4} color='secondary'>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Toolbar>
                        <DrawerStyle
                            open={open}
                            onBlur={() => {
                                isOpen(false)
                            }
                            }
                        >
                            <StyledBtMobile>
                                <StyledAvt style={{
                                    marginLeft: 0
                                }} />
                                Sign In
                            </StyledBtMobile>
                            <Divider />
                            <ul className={classes.navbar__menu__mobile}>
                                <MenuItem>
                                    <HomeIcon />
                                    <li className={classes.navbar__item__mobile}>Home</li>
                                </MenuItem>
                                <MenuItem>
                                    <EmojiFoodBeverageIcon />
                                    <li className={classes.navbar__item__mobile}>oder</li>
                                </MenuItem>
                                <MenuItem>
                                    <RestaurantMenuIcon />
                                    <li className={classes.navbar__item__mobile}>menu</li>
                                </MenuItem>
                            </ul>
                        </DrawerStyle>
                    </AppBar>
                ) : (
                    <AppBar position='fixed' className={classes.Appbar}>
                        <Toolbar className={classes.NavBar}>

                            <img src={Logo} alt="" className={classes.logo} />
                            <ul className={classes.navbar__menu}>
                                <li className={classes.navbar__item}>
                                    <HomeIcon />
                                    Home
                                </li>
                                <li className={classes.navbar__item}>
                                    <EmojiFoodBeverageIcon />
                                    oder
                                </li>
                                <li className={classes.navbar__item}>
                                    <RestaurantMenuIcon />
                                    menu
                                </li>
                            </ul>
                        </Toolbar>
                        <Toolbar>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color='secondary'>
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            <StyledBt>
                                <StyledAvt />
                                Sign In
                            </StyledBt>
                        </Toolbar>
                    </AppBar>
                )
            }
        </>

    );
}

export default NavBar;