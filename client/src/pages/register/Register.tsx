import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { Paper, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useState } from "react";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';

const registerQuery = gql`mutation UserRegister($email: String!, $username: String!, $password: String!){  
    createUser(email: $email, username: $username password: $password){
      email,
      username
    }
  }`;

export const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [register] = useMutation(registerQuery, {
        variables: {
            email: email,
            username: name,
            password: password
        }
    });
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
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setName(e.target.value)} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)} />
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
                        autoFocus
                        onChange={(e) => setPassword(e.target.value)} />
                    <Route render={({ history }) => (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => { register({}); history.push('/profile') }}>
                            Register
                        </Button>
                    )} />
                    <Grid container className="Register__Links">
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