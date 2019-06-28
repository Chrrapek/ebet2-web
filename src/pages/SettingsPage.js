import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }


    render() {
        return (
            <>
                <TopBar/>
                <div>
                </div>
            </>
        )
    }
}
