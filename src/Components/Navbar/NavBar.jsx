import { AppBar, Avatar, Badge, Button, Divider, Drawer, makeStyles, Toolbar, useMediaQuery, useTheme, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Notification from 'Components/Notification/Notification';
import IndexLogin from 'Page/Login/IndexLogin';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const Logo = process.env.PUBLIC_URL + '/logo.png'


const useStyle = makeStyles((theme) => {
    return {
        Appbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 4rem',
            backgroundColor: "#3498db"
        },
        logo: {
            height: '3rem'
        },
        navbar__menu: {
            listStyle: 'none',
            display: 'flex',
            marginLeft: '1rem'
        },
        navbar__item: {
            textTransform: 'capitalize',
            marginRight: '5rem',
            display: "flex",
            alignItems: 'center',
            "&>svg": {
                marginRight: 10
            }
        },

        //style mobile
        AppbarMobile: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: "#3498db"
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
        backgroundColor: '#c0392b',
        color: "#ffffff"
    },
}))(Badge);

const StyledAvt = withStyles((theme) => ({
    root: {
        marginRight: '1rem',
        marginLeft: '3rem'
    },
}))(Avatar);

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

    },
    label: {
        justifyContent: 'start'
    }
}))(Button);

function BadgeComponent() {
    const [open, setOpen] = useState(false)
    const onClickBadge = () => {
        setOpen(true)
    }
    const onCloseDialog = () => {
        setOpen(false)
    }
    return (
        <>
            <Notification open={open} close={onCloseDialog} />
            <IconButton onClick={onClickBadge}>
                <StyledBadge badgeContent={0} style={{ color: '#ffffff' }}>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </>
    )
}

function User() {
    const { desk } = useSelector(state => state.DeskReducer)

    //open dialong login
    const [login, setLogin] = useState(false);
    const btLogin = () => {
        setLogin(true)
    }
    const closeLogin = () => {
        setLogin(false)
    }

    return (
        <>
            <IndexLogin open={login} close={closeLogin} />
            <StyledBtMobile
                onClick={btLogin}
            >

                {
                    !desk &&
                    <>
                        <StyledAvt style={{
                            marginLeft: 0
                        }}></StyledAvt>
                        Sign In
                    </>
                }
                {
                    desk &&
                    <>
                        <StyledAvt style={{
                            marginLeft: 0
                        }}>{desk.numberTable}</StyledAvt>
                        Bàn {desk.numberTable}
                    </>
                }
            </StyledBtMobile>
        </>
    )
}

function NavBar(props) {
    const classes = useStyle();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('xs'))
    const [open, isOpen] = useState(false)
    const history = useHistory();
    const { pageActive } = useSelector(state => state.NavbarReducer)


    return (
        <>

            {
                match ? (
                    <AppBar className={classes.AppbarMobile} id="appbar">
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
                            <BadgeComponent />
                        </Toolbar>
                        <DrawerStyle
                            open={open}
                            onBlur={() => {
                                isOpen(false)
                            }
                            }
                        >
                            <User />
                            <Divider />
                            <ul className={classes.navbar__menu__mobile}>
                                <MenuItem onClick={() => {
                                    history.push('/home')
                                    isOpen(false)
                                }
                                }
                                    style={pageActive === 'home' ? { backgroundColor: "#74b9ff" } : { backgroundColor: 'unset' }}

                                >
                                    <HomeIcon />
                                    <li className={classes.navbar__item__mobile}>
                                        home
                                    </li>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    history.push('/menu')
                                    isOpen(false)
                                }}
                                    style={pageActive === 'menu' ? { backgroundColor: "#74b9ff" } : { backgroundColor: 'unset' }}
                                >
                                    <RestaurantMenuIcon />
                                    <li className={classes.navbar__item__mobile} >
                                        Menu
                                    </li>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    history.push("/oder")
                                    isOpen(false)
                                }}
                                    style={pageActive === 'oder' ? { backgroundColor: "#74b9ff" } : { backgroundColor: 'unset' }}
                                >
                                    <EmojiFoodBeverageIcon />
                                    <li className={classes.navbar__item__mobile}>
                                        Oder
                                    </li>
                                </MenuItem>
                            </ul>
                        </DrawerStyle>
                    </AppBar>
                ) : (
                    <AppBar position='fixed' className={classes.Appbar} id="appbar">
                        <Toolbar className={classes.NavBar}>

                            <img src={Logo} alt="" className={classes.logo} />
                            <ul className={classes.navbar__menu}>
                                <li className={classes.navbar__item}>
                                    <HomeIcon />
                                    <Link to='/home'>home</Link>
                                </li>
                                <li className={classes.navbar__item}>
                                    <RestaurantMenuIcon />
                                    <Link to='/menu'>Menu</Link>
                                </li>
                                <li className={classes.navbar__item}>
                                    <EmojiFoodBeverageIcon />
                                    <Link to='/oder'>Oder</Link>
                                </li>
                            </ul>
                        </Toolbar>
                        <Toolbar>
                            <BadgeComponent />
                            <User />
                        </Toolbar>
                    </AppBar>
                )
            }
        </>

    );
}

export default NavBar;