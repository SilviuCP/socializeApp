import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import './style.scss';
import { client } from '../../App';
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';

const loginQuery = gql`mutation {  
    login(email: "b", password: "b"){
      email
    }
  }`;

const meQuery = gql`query {
    me{
      email
    }
  }`

export const Login = () => {
    const [login] = useMutation(loginQuery);
    const [getMe, {loading, data}] = useLazyQuery(meQuery);
    React.useEffect(() => {
        console.log(data);
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
                        onClick={() => getMe({})}>
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