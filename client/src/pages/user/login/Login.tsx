import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import './style.scss';

export class Login extends React.Component {
    render() {
        return <div className="LoginPage">
            <Container maxWidth="xs">
                <div>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            autoFocus />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Sign In
                        </Button>
                        <Grid container className="LoginPage__Links">
                            <Grid item xs>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    }
}