import { Button, Container, Divider, Grid, Hidden, makeStyles, Paper, withStyles } from '@material-ui/core';
import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyle = makeStyles({
    container: {
        marginTop: "1rem"
    },
    category: {
        paddingInline: 10
    },
    categoryTitle: {
        fontSize: '1.2em',
        fontWeight: "bold",
        paddingInline: 5
    },
    listItem: {
        marginTop: 5
    }
})

const CategoryButton = withStyles((theme) => ({
    root: {
        width: '100%',
        borderRadius: 5,
        padding: 5
    },
    label: {
        justifyContent: 'end'
    }
}))(Button);

function ShopConten(props) {
    const classes = useStyle();
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container>
                <Hidden mdDown>
                    <Grid item lg={2} className={classes.category}>
                        <div className={classes.categoryTitle}>
                            Danh mục
                        </div>
                        <Divider light={true} />
                        <div className={classes.listItem}>
                            <CategoryButton>
                                <FastfoodIcon />
                                Haaps
                            </CategoryButton>
                            <CategoryButton>
                                <FastfoodIcon />
                                laau
                            </CategoryButton>
                            <CategoryButton>
                                <FastfoodIcon />
                                nuong
                            </CategoryButton>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={10} >
                    <Paper>2</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopConten;