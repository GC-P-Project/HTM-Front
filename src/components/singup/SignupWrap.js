import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            GC HTM {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const backgroundTheme = createMuiTheme({
    palette: {
        background: {
            default: "white",
        },
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
                                <TextField variant="outlined" required fullWidth id="name" label="Name" name="name" autoComplete="name" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Male" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Female" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="outlined" required fullWidth id="height" label="Height (cm)" name="height" autoComplete="height" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="outlined" required fullWidth id="weight" label="Weight (kg)" name="weight" autoComplete="weight" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="age" label="Age" name="age" autoComplete="age" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="email" label="Email" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </MuiThemeProvider>
    );
}

export default SignupWrap;
