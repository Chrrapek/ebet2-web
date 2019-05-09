import React, {Component} from 'react';
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import Check from "@material-ui/icons/Check"
import * as PropTypes from "prop-types";
import {api, bet, bets, url} from "../../model/constants";
import {betterGet, post} from "../../model/httpRequests";
import Cookies from 'js-cookie';

class MatchRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: -1
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
        const {match} = this.props;
        post(url + api + bet, {
            matchUUID: match.uuid,
            betTyp: type
        }, Cookies.get('token'))
            .then(() => this.getSelections());
    };

    changeBet = (type) => {

    };

    componentDidMount() {
        this.getSelections()
    };

    getSelections = () => {
        const {match} = this.props;
        betterGet(url + api + bets,
            {matchUUID: match.uuid},
            {Authorization: Cookies.get("token")})
            .then(res => res.json())
            .then(res => {
                if (res.length > 0) {
                    console.log("Res w cdm", res);
                    const userUuid = Cookies.get("userUuid");
                    const bet = res.filter(x => x.userUUID === userUuid);
                    this.selectCorrespondingButton(bet[0]);
                }
            })
    };

    render() {
        const {classes, match} = this.props;
        return (
            <TableRow className={classes.row} key={match.id}>
                <CustomTable component="th" scope="match">{match.host}</CustomTable>
                <CustomTable align="right">{match.guest}</CustomTable>
                <CustomTable align="center">
                    <Button variant="contained" color={this.state.selected === 0 ? "secondary" : "primary"}
                            className={classes.button}
                            onClick={() => this.state.selected === -1 ?
                                this.addBet("HOST_WON") : this.changeBet("HOST_WON")}>
                        <Check/>
                    </Button>
                </CustomTable>
                <CustomTable align="center">
                    <Button variant="contained" color={this.state.selected === 1 ? "secondary" : "primary"}
                            className={classes.button}
                            onClick={() => this.state.selected === -1 ?
                                this.addBet("DRAW") : this.changeBet("DRAW")}>
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
