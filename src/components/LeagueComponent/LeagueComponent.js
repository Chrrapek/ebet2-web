import React from 'react';
import {Card, CardContent, withStyles} from "@material-ui/core";

const styles = theme => ({
    card: {
        width: 300,
        height: 200,
        margin: "0 2em 3em 2em",
        flex: "1 0 auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

const LeagueComponent = (props) => {
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                {props.league.name}
            </CardContent>
        </Card>
    )
};

export default withStyles(styles)(LeagueComponent);
