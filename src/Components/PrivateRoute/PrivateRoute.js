import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'
function PrivateRoute({ component: Component, ...rest }) {
    const { login } = useSelector(state => state.UserReducer)
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    return (
                        <>
                            {
                                login ? <Component {...props} />
                                    : <Redirect to='/loginfalse' />
                            }
                        </>
                    )
                }
            }
        />
    );
}

export default PrivateRoute;