import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import IndexMenu from './Page/Menu/IndexMenu';
import IndexHome from 'Page/Home/IndexHome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Foodter from 'Components/Foodter/foodter';
import Admin from 'Page/Admin/IndexAdmin';
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import CheckUser from 'Page/Login/Components/CheckUser/CheckUser';
import NotFound from 'Components/NotFound/NotFound';

const useStyle = makeStyles((theme) => {
    return {
        toolbar: theme.mixins.toolbar,
        conten: {
            minHeight: `calc(100vh - ${theme.mixins.toolbar.tabSize}px)`,
        }
    }
})

function App(props) {
    const classes = useStyle();
    const { roles } = useSelector(state => state.UserReducer)
    return (
        <>
            <Router>
                {
                    roles
                        ?
                        <>
                            <Redirect exact from='/' to='/admin' />
                            <PrivateRoute path='/admin' component={Admin} />
                        </>
                        :
                        <>
                            <NavBar />
                            <div className={classes.toolbar}></div>
                            <div className={classes.conten}>
                                <Switch>
                                    <Redirect exact from='/' to='/home' />
                                    <Route exact path='/checkuser/:keyTable' component={CheckUser} />
                                    <Route path='/home' component={IndexHome} />
                                    <Route path='/menu' component={IndexMenu} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                            <Foodter />
                        </>
                }
            </Router>
        </>
    );
}

export default App;