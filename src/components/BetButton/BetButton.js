import React from 'react';
import Check from "@material-ui/icons/Check";
import {Button} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../CustomTable/CustomTable";

const BetButton = ({classes, matchStarted, selected, onClick, position}) => {
    console.log("Selected: ", selected);
    return (
        <Button variant="contained" color={selected ? "secondary" : "primary"}
                className={classes.button} disabled={matchStarted}
                onClick={onClick}>
            <Check/>
        </Button>
    )
};

export default withStyles(styles)(BetButton);
