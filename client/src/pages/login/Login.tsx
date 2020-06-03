import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import './style.scss';
import { client } from '../../App';
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const loginQuery = gql`mutation UserLogin($email: String!, $password: String!){  
    login(email: $email, password: $password){
      email,
      username
    }
  }`;


export const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, mutationData] = useMutation(loginQuery, {
        variables: {
            email: email,
            password: password
        }
    });
    React.useEffect(() => {
        if (mutationData.data) {
            history.push("/feed");
        }
    })

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