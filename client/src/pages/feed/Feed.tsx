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
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { NavigationTab } from "../components/navigationTab/NavigationTab";

const getMyPosts = gql`query {
    getMyPosts{
        id,
        user_id,
        username,
        visibility,
        image,
        description
    }
  }`


export const Feed = () => {
    const { data, loading, error } = useQuery(getMyPosts);

    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>

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
                    <NewPost />
                    {data.getMyPosts.map((el, index) => {
                        return <div key={index}>
                            <Posts
                                post={el} />
                        </div>
                    })}
                </Container>
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid>
    </div>
}