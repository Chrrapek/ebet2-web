import React from 'react';
import LeagueComponent from "../LeagueComponent/LeagueComponent";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    cardList: {
        marginTop: "3em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#e0e0e0",
        width: "85%",
        paddingTop: "3em",
        textAlign: "center",
        margin: "auto",
        // boxShadow: "inset 0 0 10px #333"
    }
});

const LeagueListComponent = (props) => {
    const {classes} = props;
    return (
        <div className={classes.cardList}>
            {props.leagues.map((league, i) => {
                return <LeagueComponent league={league} key={i}/>
            })}
        </div>
    )
};

export default withStyles(styles)(LeagueListComponent);
