import React from 'react';
import LeagueComponent from "../LeagueComponent/LeagueComponent";
import styles from './LeagueListStyles'
import {FormControlLabel, withStyles} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const LeagueListComponent = ({archived, leagues, classes, onSwitchChange}) => {
    const filteredLeagues = leagues.filter(x => x.archived === archived);
    const switcher = <Switch
        color="primary"
        checked={archived}
        onChange={onSwitchChange}
        value="archive"/>;


    return (
        <>
            <div className="center">
                <FormControlLabel control={switcher} label={"Archiwum"} labelPlacement="left"/>
            </div>
            <div className={classes.cardList}>

                {
                    filteredLeagues.length === 0
                        ? <h1>Brak lig</h1>
                        : filteredLeagues.map((league, i) => {
                            return <LeagueComponent league={league} key={i}/>
                        })
                }
            </div>
        </>
    )
};

export default withStyles(styles)(LeagueListComponent);
