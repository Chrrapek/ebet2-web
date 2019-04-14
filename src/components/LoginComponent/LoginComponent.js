import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./LoginStyles";
import {Link, withRouter} from "react-router-dom";
import CustomFormControl from "../CustomFormControl/CustomFormControl";

const LoginComponent = ({onTextChange, onLogin, classes}) => {
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
                    <form className={classes.form} onSubmit={onLogin}>
                        <CustomFormControl purpose="username" handler={onTextChange}>
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
                            Zaloguj
                        </Button>
                        <Typography component="h1" variant="button" align='center'>
                            <Link to={"/register"}> Nie masz konta? Zarejestruj się </Link>
                        </Typography>
                    </form>
                </Paper>
            </main>
        );
};

export default withRouter(withStyles(styles)(LoginComponent));
