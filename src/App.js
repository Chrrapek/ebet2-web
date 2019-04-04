import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import LeaguesPage from "./pages/LeaguesPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    }
});

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <PrivateRoute path="/leagues" component={LeaguesPage}/>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
