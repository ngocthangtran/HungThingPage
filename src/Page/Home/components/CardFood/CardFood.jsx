import React from 'react';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './cardfood.scss'
import { Grid, IconButton } from '@material-ui/core';

CardFood.propTypes = {
    linkImg: PropTypes.string,
    name: PropTypes.string,
    FoodDetail: PropTypes.string,
};

function CardFood(props) {
    return (
        <Grid container style={{ marginBottom: "3rem", rowGap:"30px" }}>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">
                                đ150.000
                            </div>
                            <div className="item__conten__bottom__buttom">
                                <AddShoppingCartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát rau củ
                            </div>
                            <div className="item__conten__info__detail">
                                Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={3} xs={6}>
                <div className="item">
                    <img className='item__img' src="https://2monngonmoingay.com/wp-content/uploads/2020/02/salad-tao-tom.jpg" alt="" />
                    <div className="item__conten">
                        <div className="item__conten__info">
                            <div className="item__conten__info__name">
                                Xa lát táo môm
                            </div>
                            <div className="item__conten__info__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod velit debitis, vitae rem aliquid accusantium aut quidem natus enim eius assumenda ab atque vero suscipit ad animi, adipisci ipsam?
                            </div>
                        </div>
                        <div className="item__conten__bottom">
                            <div className="item__conten__bottom__price">

                            </div>
                            <div className="item__conten__bottom__buttom">

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>

    );
}

export default CardFood;