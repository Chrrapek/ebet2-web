import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                document.cookie.indexOf('token') > 0 ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
        />
    )
};

export default PrivateRoute
