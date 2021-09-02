import React from 'react';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './cardfood.scss'
import { shortenMoney } from 'utils/convertPrice';

CardFood.propTypes = {
    linkImg: PropTypes.string,
    name: PropTypes.string,
    FoodDetail: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func
};

CardFood.defaultProps = {
    linkImg: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vegetable-salad-food-vegetables-vegetable-salad-food-pattern-png-image_3822948.jpg',
    name: 'Xa lát rau củ',
    foodDetail: 'Món khai vị thanh mát, lại tươi ngon giòn ngọt tự nhiên',
    price: 150000,
    onClick: null
}

function CardFood(props) {
    const {
        linkImg, name, foodDetail, price,
        onClick
    } = props;
    return (
        <div className="item" onClick={onClick}>
            <img className='item__img' src={linkImg} alt="" />
            <div className="item__conten">
                <div className="item__conten__info">
                    <div className="item__conten__info__name">
                        {name}
                    </div>
                    <div className="item__conten__info__detail">
                        {foodDetail}
                    </div>
                </div>
                <div className="item__conten__bottom">
                    <div className="item__conten__bottom__price">
                        {shortenMoney(price)}
                    </div>
                    <div className="item__conten__bottom__buttom">
                        <AddShoppingCartIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardFood;