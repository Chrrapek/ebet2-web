import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import LeaguesPage from "./pages/LeaguesPage";
import RegisterPage from "./pages/RegisterPage";
import ResultsPage from "./pages/ResultsPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SettingsPage from "./pages/SettingsPage";
import MatchesPage from "./pages/MatchesPage";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: "#5984f3",
            light: "#688ff4",
            dark: "#5178dd"
        },
        secondary: {
            main: "#34435e",
            light: "#495c5e",
            dark: "#28325e",
        },
        error: {
            main: "#d63230",
            dark: "#c32e2c",
            light: "#d94442"
        }
    }
});

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <PrivateRoute exact path="/leagues" component={LeaguesPage}/>
                    <PrivateRoute path="/results" component={ResultsPage}/>
                    <PrivateRoute path="/settings" component={SettingsPage}/>
                    <PrivateRoute path="/leagues/:id" component={MatchesPage}/>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
