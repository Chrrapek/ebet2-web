import React from 'react';
import LeagueComponent from "../LeagueComponent/LeagueComponent";
import styles from './LeagueListStyles'
import {FormControlLabel, withStyles} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import List from "@material-ui/core/List";

const LeagueListComponent = ({archived, leagues, classes, onSwitchChange, goToMatches}) => {
    const filteredLeagues = leagues.filter(x => x.archived === archived);
    const switcher = <Switch
        color="primary"
        checked={archived}
        onChange={onSwitchChange}
        value="archive"/>;


    return (
        <>
            <div className="center tm1">
                <FormControlLabel control={switcher} label={"Pokaż ligi archiwalne"} labelPlacement="top"/>
            </div>
            <List className={classes.cardList}>

                {
                    filteredLeagues.length === 0
                        ? <h1>Brak lig</h1>
                        : filteredLeagues.map((league, i) => {
                            return <LeagueComponent league={league} key={i} goToMatches={goToMatches}/>
                        })
                }
            </List>
        </>
    )
};

export default withStyles(styles)(LeagueListComponent);
