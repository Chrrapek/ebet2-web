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
            leaguesArray: [],
            archived: false
        }
    }

    componentDidMount() {
        get(url + api + leagues, {}, {token: Cookies.get("token")})
            .then(response => response.json())
            .then(res => this.setState({leaguesArray: res}))
            .catch(err => console.log(err))
    }


    changeSwitchState = () => {
        this.setState({archived: !this.state.archived})
    };

    goToMatches = (leagueUUID) => {
        this.props.history.push(`/leagues/${leagueUUID}`);
    };

    render() {
        return (
            <>
                <TopBar/>
                <LeagueListComponent archived={this.state.archived} onSwitchChange={this.changeSwitchState}
                                     leagues={this.state.leaguesArray} goToMatches={this.goToMatches}/>
            </>
        )
    }
}
