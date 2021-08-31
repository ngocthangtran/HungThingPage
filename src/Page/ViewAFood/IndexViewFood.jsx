import { Button, Divider, useMediaQuery } from '@material-ui/core';
import { Container, Grid, makeStyles, useTheme, withStyles } from '@material-ui/core';
import CardFood from 'Page/Home/components/CardFood/CardFood';
import React from 'react';
const useStyle = makeStyles({
    container: {
        marginTop: "3rem"
    },
    img__food: {
        backgroundImage: "url('https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80')",
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
            color: "#999"
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
        border: '1px solid black',
        color: '#999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    }
})

const StyleButton = withStyles(theme => ({
    root: {
        // backgroundColor:'black'
        padding: '0.5rem',
        borderRadius: '999px',
        backgroundColor: '#ff514e',
        color: '#ffffff',
        width: '100%',
        '&:hover': {
            backgroundColor: '#a83532'
        }
    },
    lable: {
        // backgroundColor:'green'
    }
}))(Button)

function IndexViewFood(props) {
    const classes = useStyle();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('xs'));
    const ipad = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Container maxWidth='lg' className={classes.container}>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Container disableGutters={true}>
                        <div className={classes.img__food}>
                        </div>
                    </Container>
                </Grid>
                <Grid item sm={6} xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Container maxWidth={false} disableGutters={mobile}>
                        <div className={classes.info}>
                            <div >Thịt nướng campuchia</div>
                            <div className={classes.p}><p>Giá:</p> <span>đ150.000</span></div>
                            <div className={classes.p}><p>Danh mục:</p> Nướng</div>
                            <div className={classes.p}>
                                <p>Miêu tả:</p>
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Obcaecati labore exercitationem itaque? Quidem incidunt dolorum similique,
                                    aliquid, animi veniam fugiat eum molestias perferendis quia necessitatibus.
                                    Neque nam sunt eius voluptatibus.
                                </h2>
                            </div>
                        </div>
                        <Divider />
                        <Grid container style={{ marginTop: '1rem' }}>
                            <Grid item md={6} xs={12} style={{ display: 'flex' }}>
                                <div className={classes.count}>
                                    <span>Số lượng:</span>
                                    <div className={classes.btn}>-</div>
                                    <div contentEditable="true"
                                        suppressContentEditableWarning={true}
                                        className={`${classes.btn} ${classes.input}`}
                                    >
                                        0
                                    </div>
                                    <div className={classes.btn}>+</div>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <StyleButton
                                    style={
                                        ipad ? { margin: '1rem 0' } : {}
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
    );
}

export default IndexViewFood;