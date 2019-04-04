import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo_b.png";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import {withRouter} from "react-router-dom";

class LoginPage extends Component {
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
                    <LoginComponent/>
                </Grid>

            </Grid>
        )
    }
}

export default withRouter(LoginPage)
