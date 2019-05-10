import React from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {CustomTable, styles} from "../CustomTable/CustomTable";
import withStyles from "@material-ui/core/styles/withStyles";

const ResultsRow = ({classes}) => {
    return (
        <TableHead>
            <TableRow>
                <CustomTable>Użytkownik </CustomTable>
                <CustomTable align="right">Liczba punktów</CustomTable>
            </TableRow>
        </TableHead>
    )
};

export default withStyles(styles)(ResultsRow);
