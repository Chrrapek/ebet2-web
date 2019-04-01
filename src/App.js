import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './App.css';
import SignIn from "./components/SignIn";
import logo from "./images/logo_b.png"
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },/*
    palette: {
        primary: {
            main: "#585858",
            light: "#7a7a7a",
            dark: "#3f3f3f",
        },
        secondary: {
            main: "#4951ff",
            dark: "#312aff",
            light: "#4f8aff"
        }
    }*/
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{minHeight: '100vh'}}>
                    <Grid item xs={12}>
                        <img src={logo} alt="Logo" style={{maxHeight: '10em', marginTop: "2em"}}/>
                        <SignIn/>
                    </Grid>

                </Grid>

            </MuiThemeProvider>
        );
    }
}

export default App;
