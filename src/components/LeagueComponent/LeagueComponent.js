import React from 'react';
import {Button, ListItem, withStyles} from "@material-ui/core";
import styles from './LeagueStyles'

const LeagueComponent = ({classes, league, goToMatches}) => {
    console.log(league);
    return (
        <ListItem className={classes.listElement}>
            <p className={classes.leagueName}>{league.name}</p>
            <Button variant="contained" color="primary" className={classes.button}
                    onClick={() => goToMatches(league.leagueUUID)}>
                Zobacz mecze
            </Button>
        </ListItem>
    )
};

export default withStyles(styles)(LeagueComponent);
