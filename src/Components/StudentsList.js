import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  createStyles,
  Container,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsList } from "./Action";
import StudentDetail from "./StudentDetail";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const backImg =
  "https://i.pinimg.com/originals/2f/35/9a/2f359a14af5d4ef9417b0688286986e5.jpg";

const StudentsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const hogwartsStudents = useSelector(
    (state) => state.allStudents.studentsList
  );

  useEffect(() => {
    dispatch(getStudentsList());
  }, []);

  const onClickHandler = (index) => {
    console.log("clicked");
    console.log(index);
    // history.push('/dashboard/studentslist/studentcard')
    history.push(`/dashboard/studentslist/studentcard/${index}`);
  };

  return (
    <>
      <Box className={classes.gridcontainer}>
        <Grid container spacing={4} className={classes.container}>
          {hogwartsStudents.map((students, index) => {
            return (
              <Grid item sm={4} key={index}>
                <Typography
                  variant="body2"
                  className={classes.getItems}
                  onClick={() => onClickHandler(index)}
                >
                  {students.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <Switch>
          <Route
            path="/dashboard/studentslist/studentcard/:index"
            component={StudentDetail}
          />
        </Switch>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      // border: '1px solid black',
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
      // backgroundImage:`url(${backImg})`,
      // height: "100vh",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
    },
    getItems: {
      cursor: "pointer",
    },
  })
);

export default StudentsList;
