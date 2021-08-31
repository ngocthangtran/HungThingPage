import { Button, Container, Divider, FormControl, Grid, Hidden, makeStyles, MenuItem, Select, TextField, withStyles } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CardFood from 'Page/Home/components/CardFood/CardFood';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
    },
}))(Button);

function ShopConten(props) {
    const classes = useStyle();

    const history = useHistory()
    const match = useRouteMatch()
    const clickItem = () => {
        history.push(`${match.url}/dasdsada`)
    }
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
                                Hấp
                            </CategoryButton>
                            <CategoryButton>
                                <FastfoodIcon />
                                Lẩu
                            </CategoryButton>
                            <CategoryButton>
                                <FastfoodIcon />
                                Nướng
                            </CategoryButton>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={10} >
                    <Container style={{ marginBottom: '2rem' }}>
                        <Grid container>
                            <Grid item lg={9} sm={6} xs={6} style={{ paddingRight: '1rem' }}>
                                <TextField label="Tìm kiếm" style={{ width: '100%' }}></TextField>
                            </Grid>
                            <Grid item lg={3} sm={6} xs={6} style={{ display: 'flex' }}>
                                <FormControl fullWidth style={{ marginTop: 'auto' }}>
                                    <Select
                                        value={10}
                                        // onChange={handleChange}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Xắp xếp
                                        </MenuItem>
                                        <MenuItem value={10}>Giá:Từ thấp đến cao</MenuItem>
                                        <MenuItem value={20}>Giá: Từ cao đế thấp</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid container style={{ marginBottom: "3rem", rowGap: "30px" }}>
                        <Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} />
                        </Grid>
                        <Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} foodDetail={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil libero praesentium repellendus voluptatum ullam ratione commodi nam officia! Quas suscipit odit qui velit enim reiciendis fugit tempore ab quae? Enim.'} />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood onClick={clickItem} />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid><Grid item lg={3} xs={6}>
                            <CardFood />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopConten;