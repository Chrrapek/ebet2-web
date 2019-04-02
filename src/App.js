import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPageContainer from "./containers/LoginPageContainer";
import LeaguesPageContainer from "./containers/LeaguesPageContainer";
import RegisterPageContainer from "./containers/RegisterPageContainer";
import PrivateRoute from "./components/PrivateRoute";

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

        console.log("App.js sees logged:", document.cookie.indexOf('token') > 0);
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <Route exact path="/" component={LoginPageContainer}/>
                    <Route path="/register" component={RegisterPageContainer}/>
                    <PrivateRoute path="/leagues"
                                  component={LeaguesPageContainer}/>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
