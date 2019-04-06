import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cookies from 'js-cookie';
import {withRouter} from "react-router-dom";

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


const TopBar = (props) => {

    const logOut = () => {
        Cookies.remove("token");
        props.history.push("/");
    };

    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        eBet2
                    </Typography>
                    <Button variant="contained"
                            color="secondary"
                            className={classes.menuButton}
                            onClick={() => logOut()}
                            style={styles.boldText}>
                        Wyloguj się
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(withStyles(styles)(TopBar));
