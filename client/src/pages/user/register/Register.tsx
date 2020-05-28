import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { Paper, Container, Typography, TextField, Button, Link } from "@material-ui/core";

interface State {
    email: string;
    password: string;
}

export default class Register extends React.Component<State>{
    render() {
        return <div className="RegisterPage">
            <Container maxWidth="xs">
                <div>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
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
                            Register
                        </Button>
                        <Grid container className="RegisterPage__Links">
                            <Grid item xs>
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    }
}