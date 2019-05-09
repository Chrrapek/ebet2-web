import React, {Component} from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";
import * as PropTypes from "prop-types";

class MatchHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: -1
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <TableHead>
                <TableRow>
                    <CustomTable>Gospodarze </CustomTable>
                    <CustomTable align="right">Goście</CustomTable>
                    <CustomTable align="center">Obstaw gospodarzy</CustomTable>
                    <CustomTable align="center">Obstaw remis</CustomTable>
                    <CustomTable align="center">Obstaw gości</CustomTable>
                </TableRow>
            </TableHead>
        )
    }
}

MatchHeader.propTypes = {classes: PropTypes.any};

export default withStyles(styles)(MatchHeader);
