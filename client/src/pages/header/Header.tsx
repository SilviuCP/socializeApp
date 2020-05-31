import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link } from "@material-ui/core";
import './style.scss';
import { client } from '../../App';
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';

export const Header = () => {
    return <div className="LoginPage">
        <Container maxWidth="xs">
            <div>
            </div>
        </Container>
    </div>
}