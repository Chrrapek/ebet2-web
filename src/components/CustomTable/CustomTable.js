import {withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        width: "40%",
        marginTop: "1.5em",
        boxShadow: "6px 5px 17px 1px #929292",
    },
    resultsTable: {
        width: "30%",
        marginTop: "1.5em",
        boxShadow: "6px 5px 17px 1px #929292",
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    endedRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#dadada",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#e8e8e8",
        },
    }
});


export const CustomTable = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.common.white,
        fontSize: "1em",
        borderBottom: "1px solid " + theme.palette.secondary.light,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

