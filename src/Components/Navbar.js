import React from 'react';
import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    createStyles,
    makeStyles,
  } from "@material-ui/core";

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
        <AppBar color='transparent' >
            <Toolbar>
                <Typography variant='body2' >welcome to hogwarts</Typography>
            </Toolbar>
        </AppBar>
            
        </>
    )
};
const useStyles = makeStyles((theme)=>
createStyles({

}));

export default Navbar
