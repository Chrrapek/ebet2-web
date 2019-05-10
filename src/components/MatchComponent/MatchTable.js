import React from 'react';
import Table from "@material-ui/core/Table";
import MatchHeader from "./MatchHeader";
import TableBody from "@material-ui/core/TableBody";
import MatchRow from "./MatchRow";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../CustomTable/CustomTable"


const MatchTable = ({classes, rows}) => {
    return (
        <Table className={classes.table}>
            <MatchHeader/>
            <TableBody>
                {
                    rows !== undefined ?
                        rows.map((row, i) => {
                            return <MatchRow key={i} match={row}/>
                        }) :
                        null
                }
            </TableBody>
        </Table>
    )
};

export default withStyles(styles)(MatchTable);
