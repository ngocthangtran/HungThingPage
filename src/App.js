import { makeStyles } from '@material-ui/core';
import React from 'react';

import NavBar from './Components/Navbar/NavBar';
import Slide from './Components/Slide/Slide';

const useStyle = makeStyles((theme) => {
    return {
        toolbar: theme.mixins.toolbar
    }
})

function App(props) {
    const classes = useStyle();
    return (
        <div>
            <NavBar />
            <div className={classes.toolbar}>
            </div>
            <Slide/>
            {/* <Foodter/> */}
        </div>
    );
}

export default App;