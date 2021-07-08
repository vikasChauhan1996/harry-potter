import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersList } from "./Action";
import { Route, Switch, useHistory, useLocation } from "react-router";
import CharDetails from "./CharDetails";

const backImg =
  "https://i.pinimg.com/originals/2f/35/9a/2f359a14af5d4ef9417b0688286986e5.jpg?q=60";

const CharactersList = () => {
  const classes = useStyles();
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const [listClick, setListClick] = useState(false);
  const history = useHistory();

  const seriesCharacters = useSelector(
    (state) => state.allCharacters.charactersName
  );

  useEffect(() => {
    console.log("location", location);
    // if (location.pathname.split("/").length > 3) {
    //   setListClick(true);
    // } else {
    //   setListClick(false);
    // }
  }, [location]);

  useEffect(() => {
    if (seriesCharacters.length ===0) {
      dispatch(getCharactersList())
      
    }
  }, []);

 

  const onClickHandler = (index) => {
    console.log("clicked");
    console.log(index);
    history.push(`/dashboard/characters/card/${index}`)

  };

  // useEffect(() => {

  // }, [input])


  return (
    <>
      <Box className={classes.gridcontainer}>
        <Grid container spacing={4} className={classes.container}>
          {seriesCharacters.map((curntVal, index) => {
            return (
              <Grid item sm={4} key={index}>
                <Typography
                  variant="body2"
                  className={classes.getItems}
                  onClick={() => onClickHandler(index)}
                >
                  {curntVal.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <Switch>
          <Route path= '/dashboard/characters/card/:index' component={CharDetails} />
        </Switch>
      </Box>

    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({

    container: {
      position: "relative",
      left: "100px",
      top: "20px",
      width: "70%",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      color: "#7f7272",

      
    },
    gridcontainer: {
      display: "flex",
      justifyContent: "center",

      // backgroundImage: `(${backImg})`,
      // backgroundPosition: "center-cover",
      // backgroundSize: "cover",
      // backgroundAttachment: "fixed",
    },
    getItems: {
      cursor: "pointer",
    },
    "@media only screen and (max-width: 600px)": {
      getItems: {
        color: "orange",
      },
    },
  })
);
export default CharactersList;
