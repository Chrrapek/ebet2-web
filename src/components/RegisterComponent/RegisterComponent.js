import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Create} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomFormControl from "../CustomFormControl/CustomFormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "../LoginComponent/LoginStyles";
import {withRouter} from "react-router-dom";


const RegisterComponent = ({classes, onTextChange, onRegister}) => {
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
                    <form className={classes.form} onSubmit={onRegister}>
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
                            Zarejestruj
                        </Button>
                    </form>
                </Paper>

            </main>
        );
};

export default withRouter(withStyles(styles)(RegisterComponent));
