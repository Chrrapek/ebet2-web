import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                document.cookie.indexOf('admin') === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
        />
    )
};

export default AdminRoute
