import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { Avatar, Container, Typography, TextField, Button, Link, Card, CardContent, Input } from "@material-ui/core";
import { Posts } from "../components/posts/Posts";
import { Header } from "../components/header/Header";
import { DefaultAvatar } from "../../models/DefaultAvatar";
import { User } from "src/models/User";
import { NewPost } from "../components/newPost/NewPost";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { NavigationTab } from "../components/navigationTab/NavigationTab";


export const Friends = () => {
    return <div>
        <Grid justify="center" container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={3}>
                <NavigationTab />
            </Grid>
            <Grid item xs={6}>
                <Container className="ProfilePage" maxWidth="sm">
                    <Card className="CardSpace">
                        <CardContent className="ProfilePage__ProfileCardContent">
                            
                        </CardContent>
                    </Card>
                </Container>
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid>
    </div>
}