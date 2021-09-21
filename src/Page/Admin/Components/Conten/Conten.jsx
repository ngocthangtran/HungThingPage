import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const heightNav = "5rem",
    widthNav = "250px"

const useStyle = makeStyles({
    conten: {
        paddingTop: heightNav,
        paddingLeft: widthNav
    }
})

function Conten({ Component }) {
    const classes = useStyle();
    return (
        <main className={classes.conten}>
            <Container >
                <Component />
            </Container>
        </main>
    );
}

export default Conten;