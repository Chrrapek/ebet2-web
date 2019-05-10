import React from 'react';
import LeagueComponent from "../LeagueComponent/LeagueComponent";
import styles from './LeagueListStyles'
import {FormControlLabel, withStyles} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import List from "@material-ui/core/List";

const LeagueListComponent = ({archived, leagues, classes, onSwitchChange, goToMatches}) => {
    const currentLeagues = leagues.filter(x => !x.archived);
    const archievedLeagues = leagues.filter(x => x.archived);
    const switcher = <Switch
        color="primary"
        checked={archived}
        onChange={onSwitchChange}
        value="archive"/>;


    return (
        <>
            <List className={classes.cardList}>

                {
                    currentLeagues.length === 0
                        ? <h1>Brak lig aktualnych</h1>
                        : currentLeagues.map((league, i) => {
                            return <LeagueComponent league={league} key={i} goToMatches={goToMatches}/>
                        })
                }
            </List>
            <div className="center tm1">
                <FormControlLabel control={switcher} label={"Pokaż ligi archiwalne"} labelPlacement="top"/>
            </div>
            {archived ?
                <List className={classes.cardList}>
                    {
                        archievedLeagues.length === 0
                            ? <h1>Brak lig archiwalnych</h1>
                            : archievedLeagues.map((league, i) => {
                                return <LeagueComponent league={league} key={i} goToMatches={goToMatches}/>
                            })
                    }
                </List>
                :
                null
            }
        </>
    )
};

export default withStyles(styles)(LeagueListComponent);
