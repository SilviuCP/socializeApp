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
import { useLazyQuery, useQuery, useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { NavigationTab } from "../components/navigationTab/NavigationTab";

const allUsers = gql`query {
    allUsers{
        id,
        username,
        avatar
    }
}`

// const addFriend = gql`mutation addFriend($friend_id: Number!){  
//     addFriend(friend_id: $friend_id)
//   }`;


export const Friends = () => {
    const { data, loading, error } = useQuery(allUsers);
    
    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>
    // const [addNewFriend] = useMutation(addFriend);
    
    return <div>
        <Grid justify="center" container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={3}>
                <NavigationTab />
            </Grid>
            <Grid item xs={6}>
                <Container className="FriendsPage" maxWidth="sm">
                    <Card className="CardSpace">
                        <CardContent className="FriendsPage__FriendsCardContent">
                            {data.allUsers.map((el, index) => {
                                return <div key={index} className="Friends__Container">
                                    {el != undefined ?
                                        <div className="Friends">
                                            <div>
                                                <Avatar className="Avatar" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                                            </div>
                                            <div>
                                                <Typography className="Name" variant="subtitle1" color="inherit">
                                                    {el.username}
                                                </Typography>
                                            </div>
                                            <div className="Button">
                                                <Button size="small" variant="contained" color="primary" >Add Friend</Button>
                                            </div>
                                        </div>
                                        :
                                        null}
                                </div>
                            })}
                        </CardContent>
                    </Card>
                </Container>
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid>
    </div>
}