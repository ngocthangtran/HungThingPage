import { Hidden, useMediaQuery } from '@material-ui/core';
import { Button, Container, Divider, FormControl, Grid, makeStyles, MenuItem, Select, TextField, useTheme, withStyles } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CardFood from 'Components/CardFood/CardFood';
import { ActionGetFoodByCategoty } from 'Page/Menu/slideMenu';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setClassifyRedux } from './slideShop';

const useStyle = makeStyles({
    container: {
        marginTop: "1rem"
    },
    categorys: {
        paddingInline: 10,
        marginTop: '1.5rem'
    },
    category: {
        marginTop: '1rem',
    },
    classify: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        "&>svg": {
            marginRight: 5
        }
    },
    categoryTitle: {
        fontSize: '1.2em',
        fontWeight: "bold",
    },
    listItem: {
        marginTop: 5,
    },

    active: {
        backgroundColor: '#74b9ff'
    },

    //mobile style
    listItemMobile: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    categoryMobile: {
        paddingInline: 13,
        marginTop: '1rem'
    }
})

const CategoryButton = withStyles((theme) => ({
    root: {
        width: '100%',
        borderRadius: 5,
        paddingLeft: '1rem',
        overflow: 'hidden'
    },
}))(Button);

function ShopConten(props) {
    const classes = useStyle();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))

    const { category: categorys, foodCategory, loadingFood } = useSelector(state => state.MenuReducer)
    const { food, drinks } = categorys;

    const history = useHistory()
    const match = useRouteMatch()
    const { category: categoryActive } = useParams();
    const { classify: classifyRedux } = useSelector(state => state.ShopcontenReducer)

    const clickFood = (key) => {
        history.push(`${match.url}/${key}`)
    }

    const clickCategory = (item, classify) => {
        history.push(`/menu/${item}`);
        setClassify(classify)
    }

    //get data category
    const [classifyActive, setClassify] = useState('');
    //xử lý trở lại trang cũ
    useEffect(() => {
        if (classifyRedux) {
            setClassify(classifyRedux)
            return
        }
        else if (food) {
            history.push(`/menu/${food[0]}`)
        }
        setClassify('food')
    }, [classifyRedux, food, history])

    //get conten food for catefgory
    const dispatch = useDispatch();
    useEffect(() => {
        const params = {
            category: categoryActive,
            classify: classifyActive
        }
        const actionGetFood = ActionGetFoodByCategoty(params);
        dispatch(actionGetFood)
    }, [categoryActive, classifyActive, dispatch])

    //handling data selecter change - Classify
    const handlingChangeClassify = (ev) => {
        const classify = ev.target.value
        setClassify(classify)
        const classifyAction = setClassifyRedux(classify)
        dispatch(classifyAction)
        if (classify === 'food') {
            clickCategory(food[0], classify)
            return
        }
        clickCategory(drinks[0], classify)

    }
    const handleChangeCategory = (ev) => {
        clickCategory(ev.target.value, classifyActive)
    }


    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container>

                <Grid item xs={12} lg={2} className={classes.categorys}>
                    <div className={classes.categoryTitle}>
                        Danh mục
                    </div>
                    <Hidden mdDown>

                        <Divider light={true} />
                        <div className={classes.category}>
                            <div className={classes.classify}>
                                <FastfoodIcon />
                                Món ăn
                            </div>
                            <div className={mobile ? classes.listItemMobile : classes.listItem}>
                                {
                                    food && food.map((item, index) => {
                                        const classify = 'food'
                                        return (
                                            <CategoryButton key={index}
                                                className={categoryActive === item ? classes.active : ''}
                                                onClick={() => {
                                                    clickCategory(item, classify)
                                                }}
                                            >
                                                {item}
                                            </CategoryButton>
                                        )
                                    })


                                }
                            </div>
                        </div>

                        <Divider light={true} />
                        <div className={classes.category}>
                            <div className={classes.classify}>
                                <LocalBarIcon />
                                Đồ uống
                            </div>
                            <div className={mobile ? classes.listItemMobile : classes.listItem}>
                                {
                                    drinks && drinks.map((item, index) => {
                                        const classify = 'drinks'
                                        return (
                                            <CategoryButton key={index}
                                                className={categoryActive === item ? classes.active : ''}
                                                onClick={() => {
                                                    clickCategory(item, classify)
                                                }}
                                            >
                                                {item}
                                            </CategoryButton>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Hidden>
                    <Hidden lgUp>
                        <Grid container>
                            <Grid item xs={6} className={classes.categoryMobile}>
                                <FormControl fullWidth style={{ marginTop: 'auto', marginBottom: '3rem' }}>
                                    <Select
                                        value={classifyActive}
                                        onChange={handlingChangeClassify}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Phân loại
                                        </MenuItem>
                                        <MenuItem value={'food'}>Món ăn</MenuItem>
                                        <MenuItem value={'drinks'}>Đồ uống</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} className={classes.categoryMobile}>
                                <FormControl fullWidth style={{ marginTop: 'auto', marginBottom: '3rem' }}>
                                    <Select
                                        value={categoryActive ? categoryActive : ''}
                                        onChange={handleChangeCategory}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Danh mục
                                        </MenuItem>
                                        {
                                            classifyActive === 'food' && food &&
                                            food.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)
                                        }
                                        {
                                            classifyActive === 'drinks' && drinks &&
                                            drinks.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>

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
                    {
                        loadingFood &&
                        <Grid item lg={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CircularProgress />
                            Đang tải dữ liệu
                        </Grid>
                    }
                    {
                        !loadingFood &&
                        <Grid container style={{ marginBottom: "3rem", rowGap: "30px" }}>
                            {
                                foodCategory && Object.keys(foodCategory).map((item, index) => {
                                    const {
                                        link_img, describe, name, price, key
                                    } = foodCategory[item]
                                    const minPrice = Math.min(...price.size)

                                    return (
                                        <Grid item lg={3} xs={6} key={index}>
                                            <CardFood
                                                onClick={() => {
                                                    clickFood(key)
                                                }}
                                                linkImg={link_img}
                                                name={name}
                                                foodDetail={describe}
                                                price={minPrice}
                                            />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopConten;