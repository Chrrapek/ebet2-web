import React, {Component} from 'react';
import Cookies from "js-cookie"

export default class LoginPageContainer extends Component {

    removeToken = () => {
        Cookies.remove('token');
        this.props.history.push('/')
    };

    render() {
        return (
            <button onClick={this.removeToken}>Wyloguj</button>
        )
    }
}
