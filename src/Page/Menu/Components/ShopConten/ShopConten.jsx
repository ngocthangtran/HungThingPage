import { Button, Container, Divider, FormControl, FormHelperText, Grid, Hidden, makeStyles, MenuItem, Select, TextField, withStyles } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CardFood from 'Page/Home/components/CardFood/CardFood';
import React from 'react';

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
                    <Container>
                        <Grid container>
                            <Grid item lg={9} sm={6} xs={6}>
                                <TextField label="Tìm kiếm" style={{ width: '100%' }}></TextField>
                            </Grid>
                            <Grid item lg={3} sm={6} xs={6}>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={'none'}
                                        // onChange={handleChange}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Placeholder
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Placeholder</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                    <CardFood/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopConten;