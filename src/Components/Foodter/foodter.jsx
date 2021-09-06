import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    footer: {
        backgroundColor: '#212121',
        padding: 20
    },
    column: {
        padding: 10
    },
    location: {
        color: '#ffffff'
    },
    p: {
        display: 'inline-block',
        color: 'rgb(230, 126, 34)'
    },
    address: {
        marginBottom: '1rem',
        lineHeight: 1.3
    },
    img: {
        width: '2.5rem',
        height: '2.5rem',
        objectFit: 'cover',
        marginInline: '0.5rem'
    },
})


function Foodter(props) {
    const classes = useStyle();
    return (
        <Container maxWidth='xl' className={classes.footer}>
            <Grid container>
                <Grid item lg={4} sm={6} xs={12} className={classes.column}>
                    <Paper>3</Paper>
                </Grid >
                <Grid item lg={4} sm={6} xs={12} className={classes.column}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.3532046324058!2d106.714787!3d10.9855187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d12faf029eb7%3A0xbfaaea1c022fda1a!2zTmjDoCBIw6BuZyBRdcOhbiBOaOG6rXUgRMOqIE7DumkgSMawbmcgVGjhu4tuaA!5e0!3m2!1svi!2s!4v1630832208522!5m2!1svi!2s"
                        width="100%"
                        height="100px"
                        style={
                            {
                                border: 0
                            }
                        }
                        allowFullScreen=""
                        loading="lazy"
                        title='sadsadsa'
                    >
                    </iframe>
                </Grid>
                <Grid item lg={4} sm={12} xs={12} className={classes.column}>
                    <div className={classes.location}>

                        <div className={classes.address}>
                            <p className={classes.p}>Địa chỉ:</p> Bình chuẩn 19 - Khu phố Bình Phú - Phường Bình Chuẩn - Thành phố Thuận An - Bình Dương
                        </div>
                        <div className={classes.address}>
                            <p className={classes.p}>Hotline:</p> 0983199999
                        </div>
                        <div className={classes.address}>
                            <img src={`${process.env.PUBLIC_URL}/img/fbicon.png`} alt="" className={classes.img} />
                            <img src={`${process.env.PUBLIC_URL}/img/google.png`} alt="" className={classes.img} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Foodter;