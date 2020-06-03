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
import { useState, useEffect } from "react";
import { NavigationTab } from "../components/navigationTab/NavigationTab";
import { PostModel } from "../../models/PostModel";

interface Props {
    currentUser: User
}

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


export const Profile = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const { data, loading, error } = useQuery(getMyPosts);

    React.useEffect(() => {
        if (!loading && data) {
            setPosts(data.getMyPosts)
        }
    },[data])
    
    
    const addPost = (post: PostModel) => {
        setPosts([
            ...posts,
            post
        ])
    }
    
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
                            <Avatar className="Avatar" src={DefaultAvatar.avatar} />
                            <div className="Name">
                                Mac Miller
                    </div>
                        </CardContent>
                        <div className="ProfilePage__ProfileCardButtons">
                            <Button size="small" className="button" variant="contained" color="primary" onClick={() => window.location.href = '/friends'}>Add Friends</Button>
                            <Button size="small" className="button" variant="contained" color="primary">Edit Profile</Button>
                        </div>
                    </Card>
                    <NewPost
                        updatePostList={addPost} />
                    {posts.map((el) => {
                        return <div key={el.id}>
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