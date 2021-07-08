import React from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router";

const bodyImage =
  "https://wallpapermemory.com/uploads/673/harry-potter-and-the-deathly-hallows-part-1-background-full-hd-144621.jpg" ;
const FrontPage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box className={classes.bodyPage}>
        <Box className={classes.headerBox}>
          <Typography variant="h3" className={classes.head}>
            welcome to magical world
          </Typography>
          <Box className={classes.bntBox} >
            {/* <Button className={classes.btn} onClick={()=>history.push('/navigationbar')} >start</Button> */}
            <Button className={classes.btn} onClick={()=>history.push('/dashboard')} >start</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    bodyPage: {
      // height: "790px",
      height:"100vh",
      width:"100vw",
      backgroundImage: `url(${bodyImage})`,
      backgroundPosition: "center-cover",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      // height:"auto"
    },
    headerBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      top: "400px",
    },
    head: {
      color: "#9db79d",
      textTransform: "capitalize",
    },
    btn: {
      color: "#d6dcdc",
      fontSize:"25px"
    //   backgroundColor: "white",
    },

    // @media (max-width: 768px){

    // } 
  })
);

export default FrontPage;
