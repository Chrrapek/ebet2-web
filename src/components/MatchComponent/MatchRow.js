import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import Check from "@material-ui/icons/Check"

const MatchRow = ({classes, match}) => {
    return (
        <TableRow className={classes.row} key={match.id}>
            <CustomTable component="th" scope="match">{match.host}</CustomTable>
            <CustomTable align="right">{match.guest}</CustomTable>
            <CustomTable align="center">
                <Button variant="contained" color="primary" className={classes.button}>
                    <Check/>
                </Button>
            </CustomTable>
            <CustomTable align="center">
                <Button variant="contained" color="primary" className={classes.button}>
                    <Check/>
                </Button></CustomTable>
            <CustomTable align="center">
                <Button variant="contained" color="primary" className={classes.button}>
                    <Check/>
                </Button></CustomTable>
        </TableRow>
    )
};

export default withStyles(styles)(MatchRow);
