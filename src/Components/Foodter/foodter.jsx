import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    footer: {
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time:{
        color:"#fbb403"
    }
})


function Foodter(props) {
    const classes = useStyle();
    return (
        <div className={classes.footer}>
            <Grid container spacing={10}>
                <Grid item lg={4} sm={6} xs={12}>
                    <div className={classes.item}>
                        <div>
                            Chủ nhật
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 20.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 2
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 3
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 4
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 5
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 6
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            Thứ 7
                        </div>
                        -
                        <div className={classes.time}>
                            8.00 - 23.00
                        </div>
                    </div>

                </Grid >
                <Grid item lg={4} sm={6} xs={12}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item lg={4} sm={12} xs={12}>
                    <Paper>3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Foodter;