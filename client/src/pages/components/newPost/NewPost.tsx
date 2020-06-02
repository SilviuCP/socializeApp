import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { Avatar, Container, Typography, TextField, Button, Link, Card, CardContent, Input } from "@material-ui/core";
import { PostModel } from "src/models/PostModel";
import { DefaultAvatar } from "../../../models/DefaultAvatar";
import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';

const createPostQuery = gql`mutation CreateNewPost($description: String, $image: String, $visibility: Boolean!){  
    createPost(description: $description, image: $image, visibility: $visibility){
        id, username, visibility, image, description
  }
  }`;


export const NewPost = () => {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [visibility, setVisibility] = useState(true);
    const [createPost] = useMutation(createPostQuery, {
        variables: {
            description: description,
            image: image,
            visibility: visibility
        }
    });
    return <div>
        <Card className="CardSpace">
            <div className="ProfilePage__PostNewCard">
                <Avatar className="Avatar" src={DefaultAvatar.avatar} />
                <Input
                    disableUnderline={true}
                    className="textField"
                    id="standard-multiline-flexible"
                    placeholder="What's on your mind?"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <SendIcon className="button" onClick={() => createPost({})}/>
            </div>
        </Card>
    </div>
}
