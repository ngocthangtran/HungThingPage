
import { setPageActive } from 'App/NavbarSlide';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slide from '../../Components/Slide/Slide';
import ListProduct from './components/ListProduct/ListProduct';
import StepOder from './components/OderOnline/StepOder';

function IndexHome(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const ActionNavBar = setPageActive('home')
        dispatch(ActionNavBar);
        document.title = "Home"
    })
    return (
        <>
            <Slide />
            <StepOder />
            <ListProduct />
        </>
    );
}

export default IndexHome;