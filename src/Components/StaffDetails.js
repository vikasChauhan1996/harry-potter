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
import { getStaffList } from "./Action";
// import { FavoriteIcon, ExpandMoreIcon, Details } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const StaffDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const hogwartsStaff = useSelector(
    (state) => state.getStaff.staff[params.index] || {}
  );

  useEffect(() => {
    if (hogwartsStaff.length === 0) {
      dispatch(getStaffList());
    }
  }, []);

  useEffect(() => {
    console.log("param", params);
  }, [params]);

  useEffect(() => {
    console.log("param=============", hogwartsStaff);
  }, [hogwartsStaff]);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          className={classes.head}
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
          title={hogwartsStaff.actor}
          // subheader="September 14, 2016"
        />
        <Box>
          <img src={hogwartsStaff.image} alt={hogwartsStaff.name} width="100vw" />
        </Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="body2">
                actor : {hogwartsStaff?.actor}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography>name : {hogwartsStaff?.name}</Typography>
            <Typography>D.O.B : {hogwartsStaff?.dateOfBirth}</Typography>
            <Typography>family : {hogwartsStaff?.ancestry}</Typography>
            <Typography>eyeColour : {hogwartsStaff?.eyeColour}</Typography>
            <Typography>gender : {hogwartsStaff?.gender}</Typography>
            <Typography>hair Colour : {hogwartsStaff?.hairColour}</Typography>
            <Typography>house : {hogwartsStaff?.house}</Typography>
            <Typography>patronus : {hogwartsStaff?.patronus}</Typography>
            <Typography>wand core : {hogwartsStaff?.wand?.core}</Typography>
            <Typography>wand wood: {hogwartsStaff?.wand?.wood}</Typography>
            <Typography>
              wand length : {hogwartsStaff?.wand?.length} CM.{" "}
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

    head: {},
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

export default StaffDetails;
