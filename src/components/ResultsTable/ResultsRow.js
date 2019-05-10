import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";

const ResultsRow = ({classes, result}) => {
    return (
        <TableRow className={classes.row}>
            <CustomTable component="th" scope="match">{result.username}</CustomTable>
            <CustomTable align="right">{result.pointCounter}</CustomTable>
        </TableRow>
    )
};

export default withStyles(styles)(ResultsRow);
