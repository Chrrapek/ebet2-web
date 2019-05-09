import {withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        maxWidth: "80%",
        marginTop: "1.5em",
        boxShadow: "6px 5px 17px 1px #929292",
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


export const CustomTable = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        fontSize: "1em"
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

