import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Avatar, Button, Container, createMuiTheme, Grid, makeStyles, MuiThemeProvider, TextField, Typography } from "@material-ui/core";

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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");

    const signOk = async () => {
        if (email && password !== "") {
            const response = await fetch("http://54.180.123.156:8080/user/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        email: email,
                        password: password,
                        age: age,
                        name: name,
                        height: height,
                        weight: weight,
                        gender: gender,
                        addressType: "NORMAL",
                    },
                }),
            })
                .then(async (response) => {
                    alert("회원가입이 완료되었습니다.");
                })
                .catch((e) => {
                    console.log(e);
                    alert("회원가입에 실패하였습니다.");
                });
            return response;
        } else {
            alert("Email&Password를 입력해 주세요.");
        }
    };

    const changeInput = (e) => {
        let name = e.target.name;
        if (name === "email") {
            setEmail(e.target.value);
        } else if (name === "password") {
            setPassword(e.target.value);
        } else if (name === "name") {
            setName(e.target.value);
        } else if (name === "age") {
            setAge(e.target.value);
        } else if (name === "height") {
            setHeight(e.target.value);
        } else if (name === "weight") {
            setWeight(e.target.value);
        } else if (name === "gender") {
            setGender(e.target.value);
        }
    };

    const dataSubmit = () => {
        checkSignup(email, password, name, age, height, weight, gender);
    };

    const checkSignup = (email, password, name, age, height, weight, gender) => {
        if (!email) {
            alert("Email을 입력해 주세요.");
        } else {
            signOk();
            window.history.go(-1);
        }
    };

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
                                <TextField variant="standard" required fullWidth id="email" label="Email" name="email" autoComplete="email" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="standard" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="standard" required fullWidth id="name" label="Name" name="name" autoComplete="name" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="standard" required fullWidth id="age" label="Age" name="age" autoComplete="age" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField variant="standard" required fullWidth id="height" label="Height (cm)" name="height" autoComplete="height" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField variant="standard" required fullWidth id="weight" label="Weight (kg)" name="weight" autoComplete="weight" inputadornment="Kg" onChange={changeInput} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField variant="standard" required fullWidth id="gender" label="MALE/FEMALE" name="gender" autoComplete="gender" onChange={changeInput} />
                            </Grid>
                        </Grid>
                        <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={dataSubmit}>
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
