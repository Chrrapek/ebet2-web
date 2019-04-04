import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Create} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {url} from "../../model/constants";
import {post} from "../../model/httpRequests";
import Cookies from "js-cookie";
import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar";
import CustomFormControl from "../CustomFormControl/CustomFormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../LoginComponent/LoginStyles";
import {withRouter} from "react-router-dom";


class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleErrors = (res) => {
        if (!res.ok) {
            throw new Error("Konto o takiej nazwie już istnieje");
        }
        return res
    };

    handleSubmit = (event) => {
        event.preventDefault();
        post(url + "api/user/register", this.state)
            .then(this.handleErrors)
            .then(response => response.text())
            .then(res => {
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

    componentDidMount() {
        if (Cookies.get("token").length > 0) {
            this.props.history.push("/leagues");
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Create/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zarejestruj się
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
                            Zarejestruj
                        </Button>
                    </form>
                </Paper>
                <CustomizedSnackbar variant="error" text={this.state.errorReason} open={this.state.open}
                                    handler={this.handleClose}/>
            </main>
        );
    }
}

export default withRouter(withStyles(styles)(RegisterComponent));
