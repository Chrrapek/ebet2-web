import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";
import {get} from "../model/httpRequests";
import {api, league, matches, results, url} from "../model/constants";
import Cookies from 'js-cookie';
import MatchTable from "../components/MatchComponent/MatchTable";
import ResultsTable from "../components/ResultsTable/ResultsTable";

export default class MatchesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            league: {},
            results: {}
        }
    }

    componentDidMount() {
        get(url + api + league + this.props.match.params.id + matches,
            {}, {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => this.setState({league: res}))
            .catch(err => console.log(err));

        get(url + api + league + this.props.match.params.id + results,
            {uuid: this.props.match.params.id},
            {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => this.setState({results: res}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <TopBar/>
                <div className="spaceBetween">
                    <MatchTable rows={this.state.league.matchDTOS}/>
                    <ResultsTable results={this.state.results.generalResult}/>
                </div>
            </>
        )
    }
}
