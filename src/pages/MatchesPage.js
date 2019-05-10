import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";
import {get} from "../model/httpRequests";
import {api, league, matches, url} from "../model/constants";
import Cookies from 'js-cookie';
import MatchTable from "../components/MatchComponent/MatchTable";

export default class MatchesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            league: {}
        }
    }

    componentDidMount() {
        get(url + api + league + this.props.match.params.id + matches,
            {}, {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => this.setState({league: res}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <TopBar/>
                <div className="center">
                    <MatchTable rows={this.state.league.matchDTOS}/>
                </div>
            </>
        )
    }
}
