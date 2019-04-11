import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu';
import LockIcon from '@material-ui/icons/Lock'
import PersonIcon from '@material-ui/icons/Person';
import TableChartIcon from '@material-ui/icons/TableChart';
import SettingsIcon from '@material-ui/icons/Settings';
import RankingIcon from '@material-ui/icons/FormatListNumberedRtl';
import Cookies from 'js-cookie';
import {withRouter} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import styles from "./TopBarStyles";

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            drawerOpen: false
        }
    }

    toggleDrawer = (toState) => {
        this.setState({
            drawerOpen: toState
        });
    };


    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const logOut = () => {
            Cookies.remove("token");
            this.props.history.push("/");
        };

        const {classes} = this.props;
        const open = Boolean(this.state.anchorEl);
        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Lista lig', 'Ranking'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <TableChartIcon/> : <RankingIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    <ListItem button key={"Ustawienia"}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Ustawienia"}/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={() => this.toggleDrawer(true)}/>
                        </IconButton>
                        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={() => this.toggleDrawer(false)}
                                onKeyDown={() => this.toggleDrawer(false)}
                            >
                                {sideList}
                            </div>
                        </Drawer>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            eBet2
                        </Typography>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
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

                            <MenuItem className={classes.menuItem} onClick={() => logOut()}>
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
