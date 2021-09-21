import React from 'react';
import { Button, Container, Grid, withStyles } from '@material-ui/core';
import CardFood from 'Components/CardFood/CardFood';
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    }
})

const StyleButton = withStyles({
    root: {
        width: '10rem',
        height: '3rem',
        background: "unset",
        margin: '1rem',
        marginBottom: '5rem',
        border: "2px solid black"
    }
})(Button)

function ListProduct(props) {

    const classes = useStyle();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container style={{ rowGap: '1rem' }}>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>
                <Grid item lg={3}>
                    <CardFood />
                </Grid>

            </Grid>
            <StyleButton>Xem thêm</StyleButton>
        </Container>
    );
}

export default ListProduct;