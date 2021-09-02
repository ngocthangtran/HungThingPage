import { makeStyles } from '@material-ui/core';
import React from 'react';
// import Foodter from './Components/Foodter/foodter'
import NavBar from './Components/Navbar/NavBar';
import IndexMenu from './Page/Menu/IndexMenu';
import IndexHome from 'Page/Home/IndexHome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Foodter from 'Components/Foodter/foodter';

const useStyle = makeStyles((theme) => {
    return {
        toolbar: theme.mixins.toolbar,
        conten: {
            minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        }
    }
})

function App(props) {
    const classes = useStyle();
    return (
        <>
            <Router>
                <NavBar />
                <div className={classes.toolbar}></div>
                <div className={classes.conten}>
                    <Switch>
                        <Redirect exact from='/' to='/home' />
                        <Route path='/home' component={IndexHome} />
                        <Route path='/menu' component={IndexMenu} />
                    </Switch>
                </div>
            </Router>
            <Foodter />
        </>
    );
}

export default App;