import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    boldText: {
        fontWeight: "bold"
    },
    darkText: {
        fontWeight: "bold",
        color: "black"
    }
};

function TopBar(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Ebet2
                    </Typography>
                    <Button variant="contained" color="inherit" className={classes.menuButton} style={styles.darkText}>Zaloguj
                        się</Button>
                    <Button variant="contained" color="secondary" className={classes.menuButton}
                            style={styles.boldText}>Zarejestruj się</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(TopBar);
