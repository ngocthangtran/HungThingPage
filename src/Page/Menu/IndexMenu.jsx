import { setPageActive } from 'App/NavbarSlide';
import IndexViewFood from 'Page/ViewAFood/IndexViewFood';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import ShopConten from './Components/ShopConten/ShopConten';


function IndexMenu(props) {
    const Match = useRouteMatch();
    const dispatch = useDispatch();
    useEffect(() => {
        const ActionNavBar = setPageActive('menu')
        dispatch(ActionNavBar);
    })

    return (
        <>
            <Banner />
            <Switch>
                <Route exact path={`${Match.url}/:category`} component={ShopConten} />
                <Route exact path={`${Match.url}/:category/:keyFood`} component={IndexViewFood} />
            </Switch>
            {/* <ShopConten /> */}
        </>
    );
}

export default IndexMenu;