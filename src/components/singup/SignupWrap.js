import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar, Button, Checkbox, Container, createMuiTheme, FormControlLabel, Grid, makeStyles, MuiThemeProvider, TextField, Typography } from "@material-ui/core";

const backgroundTheme = createMuiTheme({
    palette: {
        background: {
            default: "white",
        },
    },
    typography: {
        fontFamily: "LotteMartDream",
    },
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignupWrap() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={backgroundTheme}>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField variant="standard" required fullWidth id="name" label="Name" name="name" autoComplete="name" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Male" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Female" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="standard" required fullWidth id="height" label="Height (cm)" name="height" autoComplete="height" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="standard" required fullWidth id="weight" label="Weight (kg)" name="weight" autoComplete="weight" InputAdornment="Kg"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="standard" required fullWidth id="age" label="Age" name="age" autoComplete="age" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="standard" required fullWidth id="email" label="Email" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="standard" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            SIGN UP
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </MuiThemeProvider>
    );
}

export default SignupWrap;
