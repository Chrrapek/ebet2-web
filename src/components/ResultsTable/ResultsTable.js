import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import {CustomTable, styles} from "../CustomTable/CustomTable"
import ResultsRow from "./ResultsRow";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";


const ResultsTable = ({classes, results, archived}) => {
    return (
        <Table className={archived ? classes.table : classes.resultsTable}>
            <TableHead>
                <TableRow>
                    <CustomTable>Użytkownik </CustomTable>
                    <CustomTable align="right">Liczba punktów</CustomTable>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    results !== undefined ?
                        results.map((res, i) => {
                            return <ResultsRow key={i} result={res}/>
                        }) :
                        null
                }
            </TableBody>
        </Table>
    )
};

export default withStyles(styles)(ResultsTable);
