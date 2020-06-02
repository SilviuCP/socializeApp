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
import { useState, useEffect } from "react";
import { NavigationTab } from "../components/navigationTab/NavigationTab";

interface Props {
    currentUser: User
}


const posts = [
    {
        id: 1,
        user_id: 1,
        username: "Mac Miller",
        visibility: true,
        image: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
        description: "vacation",
        likes: 3,
    },
    {
        id: 2,
        user_id: 2,
        username: "Mac Miller",
        visibility: true,
        description: "vacation",
    }
]

const getMyPosts = gql`query {
    getMyPosts{
        description,
        image
    }
  }`
  

export const Profile = () => {
    const [myPosts, { data }] = useLazyQuery(getMyPosts);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
        // const postsFromDB = myPosts({});
    //     setPosts(posts => [...posts, myPosts({})]);
    // })

    return <div>
        <Grid justify="center" container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={3}>
                <NavigationTab/>
            </Grid>
            <Grid item xs={6}>
                <Container className="ProfilePage" maxWidth="sm">
                    <Card className="CardSpace">
                        <CardContent className="ProfilePage__ProfileCardContent">
                            <Avatar className="Avatar" src={DefaultAvatar.avatar} />
                            <div className="Name">
                                Mac Miller
                    </div>
                        </CardContent>
                        <div className="ProfilePage__ProfileCardButtons">
                            <Button size="small" className="button" variant="contained" color="primary">Add Friend</Button>
                            <Button size="small" className="button" variant="contained" color="primary">Edit Profile</Button>
                        </div>
                    </Card>
                    <NewPost/>
                    {posts.map((el, index) => {
                        return <div key={index}>
                            {el != undefined ? <Posts post={el} /> : null}
                        </div>
                    })}
                </Container>
            </Grid>
            <Grid item xs={3}>
                
                </Grid>
        </Grid>
    </div>
}