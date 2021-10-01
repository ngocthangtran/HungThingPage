import { makeStyles } from '@material-ui/core';
import loginApi from 'Api/loginApi';
import { addUserAction } from 'App/UserSlide';
import Foodter from 'Components/Foodter/foodter';
import NotFound from 'Components/NotFound/NotFound';
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute';
import SnackBarProvider from 'Components/Snackbar/SnackBarProvider';
import Admin from 'Page/Admin/IndexAdmin';
import IndexHome from 'Page/Home/IndexHome';
import CheckUser from 'Page/Login/Components/CheckUser/CheckUser';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import IndexMenu from './Page/Menu/IndexMenu';

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
    const { login } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const getUser = async (dispatch) => {
                const user = await loginApi.check();
                if (user.status) {
                    return
                }
                const actionUser = addUserAction(user);
                dispatch(actionUser)
            }

            getUser(dispatch);
        }
    }, [dispatch])


    return (
        <>
            <SnackBarProvider />
            <Router>
                {
                    login
                        ?
                        <>
                            <Switch>
                                <Redirect exact from='/' to='/admin' />
                                <PrivateRoute path='/admin' component={Admin} />
                                <Route component={Admin} />
                            </Switch>
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