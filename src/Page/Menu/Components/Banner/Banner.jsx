import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    banner: {
        width: '100%',
        height: '15rem',
        color:'#ffffff',
        backgroundImage:'url(https://food-g-app.web.app/static/media/banner.10879cd6.jpg)',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:"1.5rem"
    }
})

function Banner(props) {
    const classes = useStyle()
    return (
        
        <div className={classes.banner}>
            Menu phong phú, đa dạng phù hợp với nhiều khẩu vị
        </div>
    );
}

export default Banner;