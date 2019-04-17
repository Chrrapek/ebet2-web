import React from 'react';
import {Card, CardContent, withStyles} from "@material-ui/core";
import styles from './LeagueStyles'

const LeagueComponent = ({classes, league}) => {
    console.log(league);
    return (
        <Card className={classes.card}>
            <CardContent>
                {league.name}
            </CardContent>
        </Card>
    )
};

export default withStyles(styles)(LeagueComponent);
