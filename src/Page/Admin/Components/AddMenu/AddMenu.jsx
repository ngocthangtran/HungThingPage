import { makeStyles } from '@material-ui/core';
import { getFoodCategory } from 'App/menuSlide';
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormDataFood from './Component/FormDataFood';
import TableFood from './Component/TableFood';


function AddMenu(props) {
    const classes = useStyle();
    useLayoutEffect(() => {
        const conten = document.getElementsByClassName(classes.conten)[0];
        const table = document.getElementsByClassName(classes.table)[0];
        table.style.height = `${conten.offsetHeight}px`

    })
    const dispatch = useDispatch();
    useEffect(() => {
        const getListFood = getFoodCategory('all')
        dispatch(getListFood)
    })

    return (
        <div className={classes.main}>
            <section className={classes.conten}>
                <FormDataFood />
            </section>
            <section className={classes.table}>
                <TableFood />
            </section>
        </div>
    );
}

export default AddMenu;

const useStyle = makeStyles({
    main: {
        display: 'flex',
        marginTop: "1rem",
    },
    conten: {
        width: "60%",
        background: '#ffffff',
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding: '1rem'
    },
    table: {
        flex: 1,
        height: 0,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        marginLeft: 10,
        background: '#ffffff',

    },
})