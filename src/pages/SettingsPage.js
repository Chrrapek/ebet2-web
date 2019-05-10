import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            leaguesArray: [],
            archived: false
        }
    }


    render() {
        return (
            <>
                <TopBar/>

            </>
        )
    }
}
