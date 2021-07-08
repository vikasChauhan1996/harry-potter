import React, { useEffect, useState } from "react";
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
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FavoriteIcon, Details } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsList } from "./Action";

const backImg =
  "https://i.pinimg.com/originals/2f/35/9a/2f359a14af5d4ef9417b0688286986e5.jpg?q=60";

const StudentDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [name, setName] = useState("");

  const hogwartsStudents = useSelector(
    (state) => state.allStudents.studentsList[params.index] || {}
  );

  useEffect(() => {
    console.log("param", params);
  }, [params]);

  useEffect(() => {
    if (hogwartsStudents.length === 0) {
      dispatch(getStudentsList());
    }
  }, []);
  useEffect(() => {
    console.log("param=============", hogwartsStudents);
  }, [hogwartsStudents]);

 

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
          title={hogwartsStudents.actor}
          subheader={hogwartsStudents.dateOfBirth}
        />
        <Box>
          <img
            src={hogwartsStudents.image}
            alt={hogwartsStudents.name}
            width="100vw"
          />
        </Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="body2">
                
                actor : {hogwartsStudents.actor}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography>name : {hogwartsStudents.name}</Typography>
            <Typography>D.O.B : {hogwartsStudents.dateOfBirth}</Typography>
            <Typography>family : {hogwartsStudents.ancestry}</Typography>
            <Typography>eyeColour : {hogwartsStudents.eyeColour}</Typography>
            <Typography>gender : {hogwartsStudents.gender}</Typography>
            <Typography>hair Colour : {hogwartsStudents.hairColour}</Typography>
            <Typography>house : {hogwartsStudents.house}</Typography>
            <Typography>patronus : {hogwartsStudents.patronus}</Typography>
            <Typography>wand core : {hogwartsStudents.wand.core}</Typography>
            <Typography>wand wood: {hogwartsStudents.wand.wood}</Typography>
            <Typography>
              wand length : {hogwartsStudents.wand.length} CM.{" "}
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

export default StudentDetail;
