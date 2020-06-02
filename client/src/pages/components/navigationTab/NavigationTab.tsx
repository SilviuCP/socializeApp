import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { Avatar, Container, Typography, TextField, Button, Link, Card, CardContent, Input, Tabs } from "@material-ui/core";
import { PostModel } from "src/models/PostModel";
import { DefaultAvatar } from "../../../models/DefaultAvatar";
import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';
import HomeIcon from '@material-ui/icons/Home';
import Friends from '@material-ui/icons/SupervisorAccount';
import Profile from '@material-ui/icons/Person';

const createPostQuery = gql`mutation CreateNewPost($description: String, $image: String, $visibility: Boolean!){  
    createPost(description: $description, image: $image, visibility: $visibility){
        id, username, visibility, image, description
  }
  }`;


export const NavigationTab = () => {
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
    return <div className="PagesTab">
        <div className="Items" onClick={() => window.location.href = '/feed'}>
            <HomeIcon className="Icons" />
            <span className="Text">
                Feed
            </span>
        </div>
        <div className="Items" onClick={() => window.location.href = '/profile'}>
            <Profile className="Icons" />
            <span className="Text">
                Profile
            </span>
        </div>
        <div className="Items" onClick={() => window.location.href = '/friends'}>
            <Friends className="Icons" />
            <span className="Text">
                Friends
            </span>
        </div>

    </div>
}
