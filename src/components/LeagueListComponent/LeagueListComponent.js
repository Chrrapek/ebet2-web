import React from 'react';
import LeagueComponent from "../LeagueComponent/LeagueComponent";
import styles from './LeagueListStyles'
import {withStyles} from "@material-ui/core";

const LeagueListComponent = ({archived, leagues, classes}) => {
    const filteredLeagues = leagues.filter(x => x.archived === archived)

    return (
        <div className={classes.cardList}>
            {
                filteredLeagues.length === 0
                    ? <h1>Brak lig</h1>
                    : filteredLeagues.map((league, i) => {
                        return <LeagueComponent league={league} key={i}/>
                    })
            }
        </div>
    )
};

export default withStyles(styles)(LeagueListComponent);
