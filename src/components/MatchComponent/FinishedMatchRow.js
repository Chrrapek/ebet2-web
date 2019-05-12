import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";

const FinishedMatchRow = ({classes, result}) => {
    const evaluateResult = (result) => {
        switch (result) {
            case "HOST_WON":
                return "Wygrana gospodarzy";
            case "GUEST_WON":
                return "Wygrana gości";
            case "DRAW":
                return "Remis";
            case "NOT_SET":
                return "Brak";
            default:
                return "Błąd";
        }
    };

    return (
        <TableRow className={classes.endedRow}>
            <CustomTable component="th" scope="match">{result.host}</CustomTable>
            <CustomTable align="right">{result.guest}</CustomTable>
            <CustomTable align="right"> {evaluateResult(result.result)} </CustomTable>
        </TableRow>
    )
};

export default withStyles(styles)(FinishedMatchRow);
