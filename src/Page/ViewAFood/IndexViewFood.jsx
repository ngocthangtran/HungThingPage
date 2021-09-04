import { Button, Chip, CircularProgress, Divider, useMediaQuery } from '@material-ui/core';
import { Container, Grid, makeStyles, useTheme, withStyles } from '@material-ui/core';
import MenuApi from 'Api/MenuApi';
import CardFood from 'Page/Home/components/CardFood/CardFood';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { shortenMoney } from 'utils/convertPrice';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyle = makeStyles({
    container: {
        marginTop: "3rem"
    },
    img__food: {
        // backgroundImage: "url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80')",
        width: "100%",
        paddingTop: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '1rem'
    },
    info: {
        fontSize: "2rem",
        marginBottom: '1rem'
    },
    p: {
        paddingTop: 10,
        fontSize: "1.5rem",

        wordBreak: 'unset',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&>p': {
            display: 'inline',
            color: "#999",
            paddingRight: 10
        },
        '&>span': {
            display: 'inline',
            color: "#ff514e"
        },
        '&>h2': {
            marginLeft: '5px',
            fontWeight: '500',
            display: 'inline',
            fontSize: '1rem',
        }
    },
    price: {
        paddingTop: 10,
        fontSize: "1.5rem",
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        '&>p': {
            display: 'inline',
            color: "#999",
            paddingRight: 10
        },
    },
    active: {
        '&>span': {
            color: '#ffffff'
        }
    },
    detail: {
        fontSize: "1rem"
    },
    quantity: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        '&::first-child': {
            marginRight: 5
        }
    },
    btn: {
        width: '2rem',
        height: "2rem",
        border: '1px solid #999',
        color: '#999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none'
    },
    input: {
        overflow: 'hidden',
        '&:focus': {
            outline: 'none'

        }
    },
    count: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&>span': {
            marginRight: "1rem",
            fontSize: '1.5rem'
        }
    },
    suggest: {
        flex: 1,
        marginTop: '1rem'
    },
    priceUnit: {
        fontSize: '1rem'
    },
    button: {
        flex: '1',
    }
})

const StyleButton = withStyles(theme => ({
    root: {
        padding: '0.5rem',
        borderRadius: '999px',
        backgroundColor: '#ff514e',
        color: '#ffffff',
        width: '100%',
        '&:hover': {
            backgroundColor: '#ff514e'
        },
    },
}))(Button)

const StyleChip = withStyles({
    root: {
        margin: 5,
        '&:hover': {
            // backgroundColor: '#b2bec3'
        }
    },
    label: {
        fontSize: '1.5rem',
        color: '#ff541a'
    }
})(Chip)

function IndexViewFood() {

    //*display
    const classes = useStyle();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('xs'));
    // const ipad = useMediaQuery(theme.breakpoints.down('sm'));



    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = (item) => {
        setAnchorEl(null);
        if (item.unit && item.unit !== dataOder.amount.oderOption.unit) {
            setDataOder({
                ...dataOder,
                amount: {
                    ...dataOder.amount,
                    oderOption: item
                }
            })
        }
    };
    const clickPrice = (item) => {
        if (item !== dataOder.selectPrice) {
            setDataOder({
                ...dataOder,
                selectPrice: item
            })
        }
    }

    //*handling data
    const { category: categoryReducer } = useSelector(state => state.MenuReducer)
    const [viewFood, setViewFood] = useState();
    const [classify, setClassify] = useState('');
    //--get key food end category
    const { category, keyFood } = useParams()
    useEffect(() => {
        if (categoryReducer) {
            Object.keys(categoryReducer).forEach(item => {
                const a = categoryReducer[item].find(el => el === category)
                if (a !== undefined) {
                    setClassify(item)
                }
            })
            const getFood = async (params) => {
                const data = await MenuApi.getFood(params);
                setViewFood(data)
            }
            if (classify) {
                const params = {
                    classify,
                    category,
                    keyFood
                }
                getFood(params)
            }
        }
    }, [category, categoryReducer, classify, keyFood])

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (viewFood) {
            setLoading(false)
            return
        } setLoading(true)
    }, [viewFood])



    //*handling action
    //-load default dataOder
    const [dataOder, setDataOder] = useState({
        amount: {
            amount: 1,
            oderOption: {}
        },
        key: '',
        name: '',
        selectPrice: 0,
        unit: ''
    });
    useEffect(() => {
        if (viewFood) {
            setDataOder({
                key: viewFood.key,
                name: viewFood.name,
                selectPrice: Math.min(...viewFood.price.size),
                unit: viewFood.price.unit,
                amount: {
                    amount: 1,
                    oderOption: viewFood.oderOption ? viewFood.oderOption[0] : {}
                }
            })
        }
    }, [viewFood])

    //-handle button counter quantity
    const minus = () => {
        if (dataOder.amount.amount === 1) {
            return
        }
        setDataOder({
            ...dataOder,
            amount: {
                ...dataOder.amount,
                amount: dataOder.amount.amount - 1
            }
        })
    }
    const plus = () => {
        if (dataOder.amount.amount === 10) {
            return
        }
        setDataOder({
            ...dataOder,
            amount: {
                ...dataOder.amount,
                amount: dataOder.amount.amount + 1
            }
        })
    }
    const onchangeValue = (ev) => {
        const value = ev.target.value;
        setDataOder({
            ...dataOder,
            amount: {
                ...dataOder.amount,
                amount: value
            }
        })
    }

    return (
        <>
            {
                loading &&
                <Grid item lg={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                    <CircularProgress />
                    Đang tải dữ liệu
                </Grid>
            }
            {
                !loading &&
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container >
                        <Grid item sm={6} xs={12}>
                            <Container disableGutters={true}>
                                <div id='abc'
                                    className={classes.img__food} style={{ backgroundImage: `url(${viewFood.link_img})` }}>
                                </div>
                            </Container>
                        </Grid>
                        <Grid item sm={6} xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Container maxWidth={false} disableGutters={mobile}>
                                <div className={classes.info}>
                                    <div >
                                        {viewFood.name}
                                        <p className={classes.priceUnit}>
                                            Từ: {shortenMoney(Math.min(...viewFood.price.size))}/{viewFood.price.unit}
                                        </p>
                                    </div>
                                    <div className={classes.price}>
                                        <p>Giá:</p>
                                        {
                                            viewFood.price.size.map((item, index) =>

                                                <StyleChip
                                                    label={shortenMoney(item)}
                                                    key={index}
                                                    className={item === dataOder.selectPrice ? classes.active : ''}
                                                    color={item === dataOder.selectPrice ? 'primary' : 'default'}
                                                    onClick={() => {
                                                        clickPrice(item)
                                                    }}
                                                />
                                            )
                                        }
                                    </div>
                                    <div className={classes.p}><p>Danh mục:</p> {viewFood.category}</div>
                                    <div className={classes.p}>
                                        <p>Miêu tả:</p>
                                        <h2>
                                            {viewFood.describe}
                                        </h2>
                                    </div>
                                </div>
                                <Divider />
                                <Grid container style={{ marginTop: '1rem' }}>
                                    <Grid item md={12} xs={12} style={{ display: 'flex' }}>
                                        <div className={classes.count}>
                                            <span>Số lượng:</span>
                                            <div className={classes.btn} onClick={minus}>-</div>
                                            <div contentEditable="true"
                                                suppressContentEditableWarning={true}
                                                className={`${classes.btn} ${classes.input}`}
                                                onChange={onchangeValue}
                                            >
                                                {dataOder.amount.amount}
                                            </div>
                                            <div className={classes.btn} onClick={plus}>+</div>
                                        </div>
                                        {
                                            viewFood.oderOption &&
                                            <>
                                                <Button
                                                    aria-controls="simple-menu"
                                                    aria-haspopup="true"
                                                    className={classes.button}
                                                    onClick={handleClick}
                                                >
                                                    {dataOder.amount.oderOption.unit}
                                                </Button>
                                                <Menu
                                                    id="simple-menu"
                                                    open={Boolean(anchorEl)}
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    onClose={handleClose}
                                                >
                                                    {
                                                        viewFood.oderOption.map((item, index) => {
                                                            return (
                                                                <MenuItem
                                                                    onClick={() => {
                                                                        handleClose(item);
                                                                    }}
                                                                    key={index}
                                                                >
                                                                    {item.unit}
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Menu>
                                            </>
                                        }
                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <StyleButton
                                            style={
                                                {
                                                    margin: '1rem 0',
                                                }
                                            }
                                        >Thêm vào giỏ hàng</StyleButton>
                                    </Grid>
                                </Grid>
                            </Container>
                            <div className={classes.suggest}>
                                <Container >
                                    <h3> Các món ăn cùng danh mục:</h3>
                                    <Grid container style={{ marginTop: '1rem' }}>
                                        <Grid item lg={4} sm={6}>
                                            <CardFood />
                                        </Grid>
                                        <Grid item lg={4} sm={6}>
                                            <CardFood />
                                        </Grid>
                                        <Grid item lg={4} sm={6}>
                                            <CardFood />
                                        </Grid>
                                    </Grid>
                                </Container>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    );
}

export default IndexViewFood;