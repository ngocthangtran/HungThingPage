import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    footer: {
        backgroundColor:'#212121',
        padding:20
    },
    column: {
        padding: 10
    }
})


function Foodter(props) {
    const classes = useStyle();
    return (
        <Container maxWidth='xl' className={classes.footer}>
            <Grid container>
                <Grid item lg={4} sm={6} xs={12} className={classes.column}>
                    <Paper>1</Paper>
                </Grid >
                <Grid item lg={4} sm={6} xs={12} className={classes.column}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item lg={4} sm={12} xs={12} className={classes.column}>
                    <Paper>3</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Foodter;