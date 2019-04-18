import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {ArrowBack, Create} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomFormControl from "../CustomFormControl/CustomFormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../LoginComponent/LoginStyles";
import {withRouter} from "react-router-dom";
import {IconButton} from "@material-ui/core";


const RegisterComponent = ({classes, onTextChange, onRegister, onBack}) => {
    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                    <IconButton color="primary" className={classes.button} style={{top: 0, left: 0}}
                                aria-label="Go back" onClick={onBack}>
                        <ArrowBack/>
                    </IconButton>
                </div>
                <Avatar className={classes.avatar}>
                    <Create/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Zarejestruj się
                </Typography>
                <form className={classes.form} onSubmit={onRegister}>
                    <CustomFormControl purpose="username" handler={onTextChange} autoFocus={true}>
                        Nazwa użytkownika
                    </CustomFormControl>
                    <CustomFormControl purpose="password" handler={onTextChange}>
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

        </main>
    );
};

export default withRouter(withStyles(styles)(RegisterComponent));
