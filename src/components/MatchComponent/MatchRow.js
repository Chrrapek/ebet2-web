import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import Check from "@material-ui/icons/Check"
import * as PropTypes from "prop-types";
import {api, bet, bets, url} from "../../model/constants";
import {get, post, put} from "../../model/httpRequests";
import Cookies from 'js-cookie';

class MatchRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: -1,
            betUuid: ''
        };
    }

    selectCorrespondingButton = (bet) => {
        switch (bet.betTyp) {
            case 'HOST_WON':
                this.setState({selected: 0});
                break;
            case 'DRAW':
                this.setState({selected: 1});
                break;
            case 'GUEST_WON':
                this.setState({selected: 2});
                break;
            default:
                this.setState({selected: -1});
                break;
        }
    };

    addBet = (type) => {
        const {match, handleErrorOpen} = this.props;
        post(url + api + bet, {
            matchUUID: match.uuid,
            betTyp: type
        }, Cookies.get('token'))
            .then(res => {
                if (res.ok) {
                    this.setState({betUuid: res.uuid});
                    this.getSelection()
                } else {
                    handleErrorOpen(res.message)
                }
            })
            .catch(console.log)
    };

    changeBet = (type) => {
        const {match, handleErrorOpen} = this.props;
        put(url + api + bet, {
            matchUUID: match.uuid,
            userUUID: Cookies.get('userUuid'),
            betTyp: type,
            uuid: this.state.betUuid
        }, Cookies.get('token'))
            .then(res => {
                if (res.ok) {
                    this.getSelection()
                } else {
                    handleErrorOpen(res.message)
                }
            })
            .catch(console.log);
    };

    componentDidMount() {
        this.getSelection()
    };

    getSelection = () => {
        const {match, handleErrorOpen} = this.props;
        get(url + api + bets,
            {matchUUID: match.uuid},
            {Authorization: Cookies.get("token")})
            .then(res => res.json())
            .then(res => {
                if (res !== undefined) {
                    const userUuid = Cookies.get("userUuid");
                    const bet = res.filter(x => x.userUUID === userUuid);
                    if (bet !== undefined && bet.length > 0) {
                        this.setState({betUuid: bet[0].uuid});
                        this.selectCorrespondingButton(bet[0]);
                    }
                }
            })
            .catch(err => handleErrorOpen(err.message));
    };

    evaluateBetClick = (position, type) => {
        if (this.state.selected === -1) {
            this.addBet(type)
        } else if (this.state.selected !== position) {
            this.changeBet(type)
        } else {
            //removing bet
        }
    };

    parseDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        const formatter = new Intl.DateTimeFormat("pl-PL", options);

        return formatter.format(date);
    };

    render() {
        const {classes, match} = this.props;
        return (
            <TableRow className={match.result === "NOT_SET" ? classes.row : classes.endedRow} key={match.id}>
                <CustomTable component="th" scope="match">{match.host}</CustomTable>
                <CustomTable align="right">{match.guest}</CustomTable>
                <CustomTable align="center">{match.round}</CustomTable>
                <CustomTable align="center">{this.parseDate(match.matchStartDate)}</CustomTable>
                <CustomTable align="center">
                    <Button variant="contained" color={this.state.selected === 0 ? "secondary" : "primary"}
                            className={classes.button}
                            onClick={() => this.evaluateBetClick(0, "HOST_WON")}>
                        <Check/>
                    </Button>
                </CustomTable>
                <CustomTable align="center">
                    <Button variant="contained" color={this.state.selected === 1 ? "secondary" : "primary"}
                            className={classes.button}
                            onClick={() => this.evaluateBetClick(1, "DRAW")}>
                        <Check/>
                    </Button>
                </CustomTable>
                <CustomTable align="center">
                    <Button variant="contained" color={this.state.selected === 2 ? "secondary" : "primary"}
                            className={classes.button}
                            onClick={() => this.state.selected === -1 ?
                                this.addBet("GUEST_WON") : this.changeBet("GUEST_WON")}>
                        <Check/>
                    </Button>
                </CustomTable>
            </TableRow>
        )
    }

}

MatchRow.propTypes = {
    classes: PropTypes.any,
    match: PropTypes.any
};

export default withStyles(styles)(MatchRow);
