import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";
import {get} from "../model/httpRequests";
import {api, league, matches, results, url} from "../model/constants";
import Cookies from 'js-cookie';
import MatchTable from "../components/MatchComponent/MatchTable";
import ResultsTable from "../components/ResultsTable/ResultsTable";
import CustomizedSnackbar from "../components/CustomizedSnackbar/CustomizedSnackbar";
import SearchField from "../components/SearchField/SearchField";

export default class MatchesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            loading: false,
            error: false,
            matches: [],
            filteredMatches: [],
            results: {},
            archived: false,
            errorReason: ''
        }
    }

    componentDidMount() {
        get(url + api + league + this.props.match.params.id + matches,
            {}, {token: Cookies.get("token")})
            .then(res => res.json())
            .then(res => {
                this.setState({matches: res.matchDTOS});
                this.setState({filteredMatches: res.matchDTOS});
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

    handleOpen = (reason) => {
        this.setState({error: true, errorReason: reason})
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({error: false});
    };

    handleSearchChange = (event) => {
        const filterText = event.target.value.toString().toLowerCase();
        const filteredMatches = this.state.matches.filter(
            x => (x.guest.toString().toLowerCase().includes(filterText)
                || x.host.toString().toLowerCase().includes(filterText)));
        this.setState({filteredMatches: filteredMatches})
    };

    render() {
        return (
            <>
                <TopBar/>
                <SearchField searchChange={this.handleSearchChange}/>
                <div className="spaceBetween">
                    <MatchTable handleErrorOpen={this.handleOpen}
                                archived={this.state.archived} rows={this.state.filteredMatches}/>
                    <ResultsTable archived={this.state.archived}
                                  results={this.state.results.generalResult}/>
                </div>
                <CustomizedSnackbar variant="error" text={this.state.errorReason} open={this.state.error}
                                    handler={this.handleClose}/>
            </>
        )
    }
}
