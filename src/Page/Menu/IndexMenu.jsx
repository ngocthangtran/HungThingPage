import { setPageActive } from 'App/NavbarSlide';
import IndexViewFood from 'Page/ViewAFood/IndexViewFood';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import ShopConten from './Components/ShopConten/ShopConten';
import { ActionCategory } from './slideMenu';


function IndexMenu(props) {
    const Match = useRouteMatch();
    const dispatch = useDispatch();
    useEffect(() => {
        const ActionNavBar = setPageActive('menu')
        dispatch(ActionNavBar);
    })

    useEffect(() => {
        try {
            const categoryAction = ActionCategory();
            dispatch(categoryAction)
        } catch (error) {
            console.log('Error in Shop conten')
        }
        
    }, [dispatch])
    const { category, loadingCategory } = useSelector(state => state.MenuReducer);
    const { food } = category
    
    return (
        <>
            <Banner />
            <Switch>
                {
                    !loadingCategory && food &&
                    <Redirect exact from={`${Match.url}`}
                        to={food ? `${Match.url}/${food[0]}` : `${Match.url}/tttttt`}
                    />
                }
                <Route exact path={`${Match.url}/:category`} component={ShopConten} />
                <Route exact path={`${Match.url}/:category/:keyFood`} component={IndexViewFood} />
            </Switch>

            {/* <ShopConten /> */}
        </>
    );
}

export default IndexMenu;