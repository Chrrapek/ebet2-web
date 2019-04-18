import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo_b.png";
import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import {post} from "../model/httpRequests";
import {api, register, url, user} from "../model/constants";
import Cookies from "js-cookie";
import CustomizedSnackbar from "../components/CustomizedSnackbar/CustomizedSnackbar";

class RegisterPage extends Component {
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
            throw new Error("Konto o takiej nazwie już istnieje");
        }
        return res
    };

    handleSubmit = (event) => {
        event.preventDefault();
        post(url + api + user + register, {password: this.state.password, username: this.state.username})
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

    goBackToLogin = () => {
        this.props.history.push('/')
    };


    showErrorSnackbar = (reason) => {
        this.setState({errorReason: reason.message, open: true})
    };

    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{minHeight: '100vh'}}>
                <Grid item xs={12}>
                    <img src={logo} alt="Logo" style={{maxHeight: '10em', marginTop: "2em"}}/>
                    <RegisterComponent onBack={this.goBackToLogin} onRegister={this.handleSubmit}
                                       onTextChange={this.handleChange}/>
                </Grid>
                <CustomizedSnackbar variant="error" text={this.state.errorReason} open={this.state.open}
                                    handler={this.handleClose}/>
            </Grid>
        )
    }
}


export default RegisterPage;
