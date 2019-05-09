import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";

export default class MatchesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            leagueUUID: ''
        }
    }

    componentDidMount() {
        this.setState({leagueUUID: this.props.match.params.id})
    }

    render() {
        return (
            <>
                <TopBar/>
                {this.state.leagueUUID}
            </>
        )
    }
}
