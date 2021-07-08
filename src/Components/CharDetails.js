import React, { useEffect } from "react";
import {
  Typography,
  Box,
  createStyles,
  makeStyles,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  ShareIcon,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FavoriteIcon, Details } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersList } from "./Action";
import { useParams } from "react-router-dom";
const backImg =
  "https://i.pinimg.com/originals/2f/35/9a/2f359a14af5d4ef9417b0688286986e5.jpg?q=60";

const CharDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();

  // const hogwartsStudents = useSelector(
  //   (state) => state.allStudents.studentsList[params.index]
  // );
  const seriesCharacters = useSelector(
    (state) => state.allCharacters.charactersName[params.index] || {}
  );

  

  

  useEffect(() => {
    if (seriesCharacters.length ===0) {
      dispatch(getCharactersList())
      
    }
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              HP
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={seriesCharacters.name}
          subheader="September 14, 2016"
        />
        <Box>
          <img src={seriesCharacters.image} alt={seriesCharacters.name} width='100vw' />
        </Box>
        {/* <Avatar aria-label="recipe" className={classes.avatar} >HP</Avatar> */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="body2">
                {" "}
                actor : {seriesCharacters.actor}{" "}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography>name : {seriesCharacters.name}</Typography>
            <Typography>D.O.B : {seriesCharacters.dateOfBirth}</Typography>
            <Typography>family : {seriesCharacters.ancestry}</Typography>
            <Typography>eyeColour : {seriesCharacters.eyeColour}</Typography>
            <Typography>gender : {seriesCharacters.gender}</Typography>
            <Typography>hair Colour : {seriesCharacters.hairColour}</Typography>
            <Typography>house : {seriesCharacters.house}</Typography>
            <Typography>patronus : {seriesCharacters.patronus}</Typography>
            <Typography>wand core : {seriesCharacters.wand.core}</Typography>
            <Typography>wand wood: {seriesCharacters.wand.wood}</Typography>
            <Typography>
              wand length : {seriesCharacters.wand.length} CM.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      position: "relative",
      top: "70px",
      left: "550px",
    },
    avatar: {
      backgroundColor: "red",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    btn: {
      position: "relative",
      left: "139px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      textAlign: "start",
      textTransform: "capitalize",
      color: "#4a4242",
      backgroundColor: "gainsboro",
    },
  })
);

export default CharDetails;
