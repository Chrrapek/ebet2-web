import React from 'react';
import Table from "@material-ui/core/Table";
import MatchHeader from "./MatchHeader";
import TableBody from "@material-ui/core/TableBody";
import MatchRow from "./MatchRow";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../CustomTable/CustomTable"
import FinishedMatchRow from "./FinishedMatchRow";
import FinishedMatchHeader from "./FinishedMatchHeader";


const MatchTable = ({classes, rows, archived}) => {
    return (
        <Table className={archived ? classes.resultsTable : classes.table}>
            {archived ? <FinishedMatchHeader/> : <MatchHeader/>}
            <TableBody>
                {
                    rows !== undefined ?
                        rows.map((row, i) => {
                            if (!archived) {
                                return <MatchRow key={i} match={row}/>
                            } else {
                                return <FinishedMatchRow key={i} result={row}/>
                            }
                        }) :
                        null
                }
            </TableBody>
        </Table>
    )
};

export default withStyles(styles)(MatchTable);
