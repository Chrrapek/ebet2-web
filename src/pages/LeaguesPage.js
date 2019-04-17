import React, {Component} from 'react';
import TopBar from "../components/TopBar/TopBar";
import LeagueListComponent from "../components/LeagueListComponent/LeagueListComponent";
import {get} from "../model/httpRequests";
import {api, leagues, url} from "../model/constants";
import Cookies from "js-cookie";
import Switch from "@material-ui/core/Switch";

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
        get(url + api + leagues, Cookies.get("token"))
            .then(response => response.json())
            .then(res => this.setState({leaguesArray: res}))
            .catch(err => console.log(err))
    }


    changeSwitchState = () => {
        this.setState({archived: !this.state.archived})
    };

    render() {
        return (
            <>
                <TopBar/>
                <Switch
                    style={{display: 'flex', justifyContent: 'center'}}
                    checked={this.state.archived}
                    onChange={() => this.changeSwitchState()}
                    value="archive"
                />
                <LeagueListComponent archived={this.state.archived} leagues={this.state.leaguesArray}/>
            </>
        )
    }
}
