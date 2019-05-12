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
            results: {},
            archived: false
        }
    }

    componentDidMount() {
        get(url + api + league + this.props.match.params.id + matches,
            {}, {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => {
                this.setState({league: res});
                this.setState({archived: res.archived})
            })
            .catch(console.log);

        get(url + api + league + this.props.match.params.id + results,
            {uuid: this.props.match.params.id},
            {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => this.setState({results: res}))
            .catch(console.log)
    }

    render() {
        return (
            <>
                <TopBar/>
                <div className="spaceBetween">
                    {
                        this.state.archived ?
                            <>
                                <ResultsTable archived={this.state.archived}
                                              results={this.state.results.generalResult}/>
                                <MatchTable archived={this.state.archived} rows={this.state.league.matchDTOS}/>
                            </> :
                            <>
                                <MatchTable archived={this.state.archived} rows={this.state.league.matchDTOS}/>
                                <ResultsTable archived={this.state.archived}
                                              results={this.state.results.generalResult}/>
                            </>
                    }

                </div>
            </>
        )
    }
}
