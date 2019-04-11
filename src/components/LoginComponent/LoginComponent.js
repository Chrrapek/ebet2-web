import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {api, login, url, user} from "../../model/constants";
import {post} from "../../model/httpRequests";
import {styles} from "./LoginStyles";
import Cookies from "js-cookie";
import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar";
import {Link, withRouter} from "react-router-dom";
import CustomFormControl from "../CustomFormControl/CustomFormControl";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            open: false,
            errorReason: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleErrors = (res) => {
        if (!res.ok) {
            throw new Error("Błędne dane logowania");
        }
        return res
    };

    handleSubmit = (event) => {
        event.preventDefault();
        post(url + api + user + login, this.state)
            .then(this.handleErrors)
            .then(response => response.text())
            .then(res => {
                Cookies.set('username', this.state.username);
                Cookies.set('token', res);
                this.props.history.push('/leagues');
            })
            .catch(err => this.showErrorSnackbar(err))
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open: false});
    };

    showErrorSnackbar = (reason) => {
        this.setState({errorReason: reason.message, open: true})
    };

    render() {
        const {classes} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zaloguj się
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <CustomFormControl purpose="username" handler={this.handleChange}>
                            Nazwa użytkownika
                        </CustomFormControl>
                        <CustomFormControl purpose="password" handler={this.handleChange}>
                            Hasło
                        </CustomFormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Zapamiętaj mnie"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Zaloguj
                        </Button>
                        <Typography component="h1" variant="button" align="center">
                            <Link to={"/register"}> Nie masz konta? Zarejestruj się </Link>
                        </Typography>
                    </form>
                </Paper>
                <CustomizedSnackbar variant="error" text={this.state.errorReason} open={this.state.open}
                                    handler={this.handleClose}/>
            </main>
        );
    }
}

export default withRouter(withStyles(styles)(LoginComponent));
