import { makeStyles } from '@material-ui/core';
import React from 'react';
// import Foodter from './Components/Foodter/foodter'
import NavBar from './Components/Navbar/NavBar';
import IndexHome from './Page/Home/IndexHome';

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
            <IndexHome/>

            {/* <Foodter/> */}
        </div>
    );
}

export default App;