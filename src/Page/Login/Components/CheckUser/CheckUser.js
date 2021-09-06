import { unwrapResult } from '@reduxjs/toolkit';
import { getTable } from 'App/deskSlide';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


function CheckUser(props) {
    const { keyTable } = useParams()
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        async function fetchData() {
            try {
                const tableAction = getTable(keyTable);
                const result = unwrapResult(await dispatch(tableAction))
                if (result) {
                    history.push('/home')
                    return
                }
                history.push('/not-find-table')
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [keyTable, dispatch, history])

    return (
        <>
        </>
    );
}

export default CheckUser;