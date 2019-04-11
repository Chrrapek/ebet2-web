import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";
import LeagueListComponent from "../components/LeagueListComponent/LeagueListComponent";
import {get} from "../model/httpRequests";
import {api, leagues, url} from "../model/constants";
import Cookies from "js-cookie";

export default class LeaguesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            leaguesArray: []
        }
    }

    componentDidMount() {
        get(url + api + leagues, Cookies.get("token"))
            .then(response => response.json())
            .then(res => this.setState({leaguesArray: res}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <TopBar/>
                <LeagueListComponent leagues={this.state.leaguesArray}/>
            </div>
        )
    }
}
