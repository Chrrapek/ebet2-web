import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Cookies from 'js-cookie';
import {NavLink, withRouter} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider} from "@material-ui/core";
import styles from "./TopBarStyles";

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            drawerOpen: false
        }
    }

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    goToSettings() {
        this.props.history.push("/settings");
    }

    logOut = () => {
        Cookies.remove("token");
        Cookies.remove("username");
        Cookies.remove("userUuid");
        this.props.history.push("/");
    };

    render() {
        const {classes} = this.props;
        const open = Boolean(this.state.anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <NavLink to={"/leagues"} className={classes.navLink}>
                            eBet2
                        </NavLink>

                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            disableAutoFocusItem={true}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem className={classes.menuItem} disabled={true}>
                                <ListItemIcon className={classes.icon}>
                                    <PersonIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset
                                              primary={"Zalogowano jako " + Cookies.get("username")}/>
                            </MenuItem>
                            <Divider/>

                            <MenuItem button key={"Ustawienia"} onClick={() => this.goToSettings()}>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Ustawienia"}/>
                            </MenuItem>

                            <MenuItem className={classes.menuItem} onClick={() => this.logOut()}>
                                <ListItemIcon className={classes.icon}>
                                    <LockIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Wyloguj"/>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(TopBar));
