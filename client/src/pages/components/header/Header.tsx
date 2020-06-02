import * as React from 'react';
import { Grid, Container, Typography, TextField, Button, Link, AppBar, IconButton, Toolbar, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style.scss';
import { client } from '../../../App';
import { gql } from "apollo-boost";
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks';

const logoutQuery = gql`mutation {  
    logout
  }`;

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [logout, { loading, data }] = useMutation(logoutQuery);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div className="">
        <AppBar position="static">
            <Toolbar variant="dense" className="Header">
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography className="Left" variant="h6" color="inherit" onClick={() => window.location.href = '/feed'}>
                            My Social Network
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Right">
                            <AccountCircleIcon  className="User"/>
                            <Typography className="User" variant="subtitle1" color="inherit">
                                My Social Network
                            </Typography>
                            <Button className="Menu" aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
                                <MenuIcon />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => window.location.href = '/profile'}>Profile</MenuItem>
                                <MenuItem onClick={() => logout({})}>Logout</MenuItem>
                            </Menu>
                            {/* <AccountCircleIcon />
                            <Typography className="User" variant="subtitle1" color="inherit">
                                My Social Network
                            </Typography>
                                <MenuIcon /> */}
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    </div>
}