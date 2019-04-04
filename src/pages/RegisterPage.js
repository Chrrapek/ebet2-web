import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo_b.png";
import RegisterComponent from "../components/RegisterComponent/RegisterComponent";

class RegisterPage extends Component {
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
                    <RegisterComponent/>
                </Grid>

            </Grid>
        )
    }
}

export default RegisterPage;
