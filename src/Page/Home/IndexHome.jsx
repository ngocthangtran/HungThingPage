
import { setPageActive } from 'App/NavbarSlide';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slide from '../../Components/Slide/Slide';
import StepOder from './components/OderOnline/StepOder';

function IndexHome(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const ActionNavBar = setPageActive('home')
        dispatch(ActionNavBar);
    })
    return (
        <>
            <Slide />
            <StepOder />
        </>
    );
}

export default IndexHome;