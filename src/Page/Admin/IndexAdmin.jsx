import React from 'react';
import Conten from './Components/Conten/Conten';
import NavbarAdmin from './Components/Navbar/NavbarAdmin';
import Desk from './Components/Desk/Desk';
import { Route, useRouteMatch, Redirect, Switch } from 'react-router';
import ListMenu from './Components/ListMenu/ListMenu';
import AddMenu from './Components/AddMenu/AddMenu';

function IndexAdmin(props) {
    const match = useRouteMatch()
    return (
        <>
            <NavbarAdmin />
            <Switch>
                <Redirect exact from={'/admin'} to={`${match.url}/status`} />
                <Route exact path={`${match.url}/status`} component={() => <Conten Component={Desk} />} />
                <Route exact path={`${match.url}/menu`} component={() => <Conten Component={ListMenu} />} />
                <Route exact path={`${match.url}/add-menu`} component={() => <Conten Component={AddMenu} />} />
            </Switch>
        </>
    );
}

export default IndexAdmin;