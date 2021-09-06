import React from 'react';
import { Route, Redirect } from 'react-router-dom'
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    const auth = true;
                    return (
                        <>
                            {
                                auth ? <Component {...props} />
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