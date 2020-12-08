import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
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
    typography: {
        fontFamily: 'LotteMartDream',
    },
});

const Footer = () => {
    return (
        <MuiThemeProvider theme={backgroundTheme}>
            <Container component="main" maxWidth="xs">
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </MuiThemeProvider>
    );
};

export default Footer;
