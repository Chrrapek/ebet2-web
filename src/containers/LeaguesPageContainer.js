import React, {Component} from 'react';
import Cookies from "js-cookie"

export default class LoginPageContainer extends Component {
    render() {
        return (
            <span>{Cookies.get("token")}</span>
        )
    }
}
