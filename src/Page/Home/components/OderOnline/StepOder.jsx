import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem'
    },
    title: {
        fontSize: '3rem',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    grid:{
        marginTop:"1rem"
    },
    colume: {
        marginBottom:'5rem'
    },
    step: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    stepIcon: {
        width: '12rem',
        height: '12rem',
        display: 'flex',
        justifyContent: 'center',
        position: "relative"
    },
    icon_img: {
        width: '100%',
        position: 'absolute',
    },
    icon_text: {
        width: "3.5rem",
        height: '3.5rem',
        padding: 4,
        position: 'absolute',
        textAlign: 'center',
        border: '3px solid #ffffff',
        borderRadius: '50%',
        right: 0,
        backgroundColor: '#ff514a',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: 'black',
            border: '3px solid black',
        }
    },
    stepText: {
        fontSize: '1.2em',
        fontWeight: 600
    },
})

function StepOder(props) {
    const classes = useStyle();
    return (
        <Container maxWidth='xl' className={classes.container}>
            <div className={classes.title}>how to using <p style={{ color: '#e67e22', fontSize: "1.5rem" }}>smart order</p></div>
            <Grid container className={classes.grid}>
                <Grid xs={12} lg={4} md={4} sm={6} className={classes.colume}>
                    <div className={classes.step}>
                        <div className={classes.stepIcon}>
                            <img src={process.env.PUBLIC_URL + '/img/scanqr.png'} alt="icon" className={classes.icon_img} />
                            <div className={classes.icon_text}>01<br />Step</div>
                        </div>
                        <div className={classes.stepText}>
                            Quét mã Qr trên bàn
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} lg={4} md={4} sm={6} className={classes.colume}>
                    <div className={classes.step}>
                        <div className={classes.stepIcon}>
                            <img src={process.env.PUBLIC_URL + '/img/menu.png'} alt="icon" className={classes.icon_img} />
                            <div className={classes.icon_text}>02<br />Step</div>
                        </div>
                        <div className={classes.stepText}>
                            Lựa chọn thức ăn trong menu
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} lg={4} md={4} sm={12} className={classes.colume}>
                    <div className={classes.step}>
                        <div className={classes.stepIcon}>
                            <img src={process.env.PUBLIC_URL + '/img/complete.png'} alt="icon" className={classes.icon_img} />
                            <div className={classes.icon_text}>03<br />Step</div>
                        </div>
                        <div className={classes.stepText}>
                            Hoàn thành Oder
                        </div>
                    </div>
                </Grid>

            </Grid>
            {/* <div className={classes.steps}>
                <div className={classes.step}>
                    <img src={process.env.PUBLIC_URL + '/img/scanqr.png'} alt="icon" className={classes.icon_img} />
                    <div className={classes.icon_text}>01<br />Step</div>
                    <div className={classes.stepText}>
                        Scan Qr code in desk
                    </div>
                </div>
                <div className={classes.step}>
                    <img src={process.env.PUBLIC_URL + '/img/menu.png'} alt="icon" className={classes.icon_img} />
                    <div className={classes.icon_text}>02<br />Step</div>
                    <div className={classes.stepText}>
                        View menu  select food
                    </div>
                </div>
                <div className={classes.step}>
                    <img src={process.env.PUBLIC_URL + '/img/complete.png'} alt="icon" className={classes.icon_img} />
                    <div className={classes.icon_text}>03<br />Step</div>
                    <div className={classes.stepText}>
                        Hoàn thành Oder
                    </div>
                </div>
            </div> */}
        </Container>
    );
}

export default StepOder;