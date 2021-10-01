import React, { Suspense, useEffect } from 'react';
import Conten from './Components/Conten/Conten';
import NavbarAdmin from './Components/Navbar/NavbarAdmin';
import Desk from './Components/Desk/Desk';
import { Route, useRouteMatch, Redirect, Switch } from 'react-router';
import AddMenu from './Components/AddMenu/AddMenu';
import { getCategory } from 'App/menuSlide';
import { useDispatch } from 'react-redux';

const TestLoadMenu = React.lazy(() => import('./Components/ListMenu/ListMenu'))

function IndexAdmin(props) {
    const match = useRouteMatch()
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoryAction = getCategory();
        dispatch(getCategoryAction)
    },[dispatch])

    return (
        <>
            <NavbarAdmin />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Redirect exact from={'/admin'} to={`${match.url}/status`} />
                    <Route exact path={`${match.url}/status`} component={() => <Conten Component={Desk} />} />
                    <Route exact path={`${match.url}/menu`} component={() => <Conten Component={TestLoadMenu} />} />
                    <Route exact path={`${match.url}/add-menu`} component={() => <Conten Component={AddMenu} />} />
                </Switch>
            </Suspense>
        </>
    );
}

export default IndexAdmin;