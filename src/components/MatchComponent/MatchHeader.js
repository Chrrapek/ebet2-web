import React from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";

const MatchHeader = ({classes}) => {
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
};

export default withStyles(styles)(MatchHeader);
