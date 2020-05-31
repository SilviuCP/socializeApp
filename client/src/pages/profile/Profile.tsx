import * as React from "react";
import Grid from '@material-ui/core/Grid';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { Avatar, Container, Typography, TextField, Button, Link, Card, CardContent, Input } from "@material-ui/core";

const posts = [
    {
        id: 1,
        author_id: 1,
        author_name: "Mac Miller",
        visibility: 0,
        image: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
        description: "vacation",
        likes: 3,
        comments: 4
    },
    {
        id: 2,
        user_id: 2,
        author_name: "Mac Miller",
        visibility: 0,
        description: "vacation",
    }
]

export const Profile = () => {
    return <div className="ProfilePage">
        <Container maxWidth="sm">
            <Card className="CardSpace">
                <CardContent className="ProfilePage__ProfileCardContent">
                    <Avatar className="Avatar" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                    <div className="Name">
                        Mac Miller
                    </div>
                </CardContent>
                <div className="ProfilePage__ProfileCardButtons">
                    <Button size="small" className="button" variant="contained" color="primary">Add Friend</Button>
                    <Button size="small" className="button" variant="contained" color="primary">Edit Profile</Button>
                </div>
            </Card>
            <Card className="CardSpace">
                <div className="ProfilePage__PostNewCard">
                    <Avatar className="Avatar" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                    <Input
                        disableUnderline={true}
                        className="textField"
                        id="standard-multiline-flexible"
                        placeholder="What's on your mind?"
                    />
                    <SendIcon className="button" />
                </div>
            </Card>
            {posts.map((post, index) => {
                return <div key={index}>
                    <Card className="CardSpace">
                        <div className="ProfilePage__PostedCards">
                            <Avatar className="Avatar" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                            <div className="Author">
                                {post.author_name}
                            </div>
                            <div className="LikesAndCommentsSection">
                                {post.image != undefined ? <img className="Image" src={post.image} /> : null}
                                {post.description != undefined ? <div className="Description">{post.description}</div> : null}
                                <div>
                                    <div className="Likes">
                                        <ThumbUpAltIcon className="Icon" />
                                        <div className="Icon">{post.likes} Likes</div>
                                    </div>
                                    <div className="Comments">
                                        <CommentIcon className="Icon" />
                                        <div className="Icon">{post.comments} Comments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            })}
        </Container>
    </div>
}