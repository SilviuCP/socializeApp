import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import './style.scss';
import { client } from '../../App';
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useState } from 'react';

const loginQuery = gql`mutation UserLogin($email: String!, $password: String!){  
    login(email: $email, password: $password){
      email,
      username
    }
  }`;

const meQuery = gql`query {
    me
  }`

export const Login = () => {
    const [getMe, { loading, data }] = useLazyQuery(meQuery);
    React.useEffect(() => {
        console.log(data);
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login] = useMutation(loginQuery, {
        variables: {
            email: email,
            password: password
                            }
    });

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
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        autoFocus
                        onChange={(e) => setPassword(e.target.value)} />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => login({})}>
                        Sign In
                        </Button>
                        <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {getMe({});{console.log("data", data)}}}>
                        ME 
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