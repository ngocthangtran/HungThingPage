import { Avatar, Badge, Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import Notification from '@material-ui/icons/NotificationsNone';

const heightNav = "5rem",
    widthNav = "250px"

const useStyle = makeStyles({
    navbar: {
        width: "100%",
        height: heightNav,
        background: '#fff',
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
        position: 'fixed',
        zIndex: '99',
        display: 'flex'
    },
    navHeader: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    navConten: {
        display: 'flex',
        justifyContent: 'end'
    },
    notification: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        "&>span": {
            margin: "1rem"
        }
    },

    user: {
        margin: "1rem",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: widthNav,
        height: "100%",
        background: "#263544"
    },

    navbarList: {
        width: widthNav,
        height: `calc(100vh - ${heightNav})`,
        background: "#263544",
        position: 'fixed',
        bottom: 0,
    },
    Category: {
        color: "#fff",
        textTransform: 'capitalize',
        fontSize: '12px',
        fontWeight: "500",
        padding: '25px 25px 15px 15px'
    },
    menu: {
        listStyle: "none",
    },
    menuItem: {
        padding: "10px 10px 10px 25px",
        color: "#fff",
        display: 'flex',
        alignItems: 'end',
        textTransform: "capitalize",
        "&>svg": {
            marginRight: "5px"
        }
    },
    dropdownMenu: {
        flexDirection: 'column',
        alignItems: 'start',
        "&>div": {
            display: 'flex',
            width: "100%",
            justifyContent: "space-between",
            "&>div": {
                color: "#fff",
                display: 'flex',
                alignItems: 'end',
                textTransform: "capitalize",
                "&>svg": {
                    marginRight: "5px"
                }
            }
        }
    },
    menuDropdown: {
        height: 0,
        overflow: 'hidden',
        marginTop: '5px',
        transition: '0.2s'
    },
    activeDropdown: {
        // height: "146px"
    },
    dropdownItem: {
        paddingLeft: 0,
        "&>a": {
            display: 'flex',
            alignItems: "center"
        }
    },
    active: {
        borderLeft: '3px solid #007bff',
        backgroundColor: "#1d2531",
        paddingLeft: 22
    }
})

function NavbarDropdow(props) {
    const classes = useStyle();
    const { name, item, active, onClick } = props;

    const [height, setHeight] = useState(0)
    useEffect(() => {
        if (active) {
            setHeight(44 * item.length)
        } else {
            setHeight(0)
        }
    }, [active, item])

    return (
        <li
            className={`${classes.menuItem} ${classes.dropdownMenu} ${active ? classes.active : ''}`}
            onClick={() => { onClick(name) }}
        >
            <div >
                <div>
                    <MenuBookIcon />
                    {name}
                </div>
                <KeyboardArrowDownIcon />
            </div>
            <ul className={`${classes.menuDropdown} ${active ? classes.activeDropdown : ''}`}
                style={{
                    height: height
                }
                }
            >
                {
                    item.map((el, index) => {
                        const { name, href } = el;
                        return (
                            <li className={`${classes.menuItem} ${classes.dropdownItem}`} key={index}>
                                <a href={href} >
                                    <KeyboardArrowRightIcon />{name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

function NavbarAdmin(props) {
    const classes = useStyle();

    const [activeName, setNameActive] = useState('');

    const onClick = (name) => {
        setNameActive(name)
    }

    return (
        <>
            <header>
                <div className={classes.navbar}>
                    <div className={classes.logo} >
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt=""
                            style={{
                                height: "100%",
                                display: 'block',
                                margin: 'auto'
                            }}
                        />
                    </div>
                    <div className={classes.navHeader}>
                        <Container className={classes.navConten}>
                            <div className={classes.notification}>
                                <Badge badgeContent={4} color='secondary'>
                                    <ChatBubbleOutlineIcon />
                                </Badge>
                                <Badge badgeContent={10} color='secondary'>
                                    <Notification />
                                </Badge>
                            </div>
                            <div className={classes.user}>
                                <Avatar>H</Avatar>
                                <div style={{
                                    textTransform: "capitalize",
                                    fontFamily: 'Quicksand',
                                    margin: '1rem'
                                }}>
                                    trần thăng
                                </div>
                                <KeyboardArrowDownIcon />
                            </div>
                        </Container>
                    </div>
                </div>
                <div className={classes.navbarList}>
                    <div className={classes.Category}>
                        Quản lý
                    </div>
                    <ul className={classes.menu}>
                        <li className={classes.menuItem}
                            onClick={() => {
                                onClick('')
                            }}
                        >
                            <HomeIcon />
                            Trang chủ
                        </li>
                        <NavbarDropdow
                            name="Menu"
                            item={[
                                { name: "Thêm menu", href: "/" },
                                { name: "Danh sách menu", href: "/" },
                                { name: "Chương trình khuyến mại", href: "/" },
                            ]}
                            onClick={onClick}
                            active={activeName === "Menu"}
                        />
                        <NavbarDropdow
                            name="Test"
                            item={[
                                { name: "Thêm menu", href: "/" },
                                { name: "Danh sách menu", href: "/" },
                            ]}
                            onClick={onClick}
                            active={activeName === "Test"}
                        />
                    </ul>
                    <div className={classes.Category}>
                        Giao diện
                    </div>
                    <ul className={classes.menu}>
                        <li className={classes.menuItem}><a href="/">Bàn</a></li>
                        <li className={classes.menuItem}><a href="/">Menu</a></li>
                        <li className={classes.menuItem}><a href="/">Bàn</a></li>
                    </ul>
                </div>

            </header>
        </>
    );
}

export default NavbarAdmin;