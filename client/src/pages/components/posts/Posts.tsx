import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { Avatar, Container, Typography, TextField, Button, Link, Card, CardContent, Input } from "@material-ui/core";
import { PostModel } from "src/models/PostModel";

interface Props {
    post: PostModel;
}

export const Posts = (props: Props) => {
    return <div className="Post">
        <Card className="CardSpace">
            <div className="Post__PostedCards">
                <Avatar className="Avatar" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                <div className="Author">
                    {props.post.username}
                </div>
                <div>
                    {props.post.image != undefined ? <img className="Image" src={props.post.image} /> : null}
                    {props.post.description != undefined ? <div className="Description">{props.post.description}</div> : null}
                    <div className="LikesAndCommentsSection">
                        <div className="Likes">
                            <ThumbUpAltIcon className="Icon" />
                            <div className="Icon">{props.post.likes} Likes</div>
                        </div>
                        <div className="Comments">
                            <CommentIcon className="Icon" />
                            <div className="Icon">{props.post.comments} Comments</div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
}