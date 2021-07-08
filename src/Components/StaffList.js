import React, { useEffect } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Grid,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getStaffList } from "./Action";
import { Switch, Route, useHistory } from "react-router-dom";
import StudentDetail from "./StudentDetail";
import StaffDetails from "./StaffDetails";

const StaffList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const hogwartsStaff = useSelector((state) => state.getStaff.staff);
  useEffect(() => {
    console.log("hogwar", hogwartsStaff);
  }, [hogwartsStaff]);

  useEffect(() => {
    if (hogwartsStaff.length === 0) {
      dispatch(getStaffList());
    }
  }, []);
  const onClickHandler = (index) => {
    console.log("clicked");
    console.log(index);
    history.push(`/dashboard/stafflist/Staffcard/${index}`);
  };
  return (
    <>
      <Box className={classes.gridcontainer}>
        <Grid container spacing={4} className={classes.container}>
          {hogwartsStaff.map((staff, index) => {
            return (
              <Grid item sm={4} key={index}>
                <Typography
                  variant="body2"
                  className={classes.getItems}
                  onClick={() => onClickHandler(index)}
                >
                  {staff.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box>
        <Switch>
          <Route
            path="/dashboard/stafflist/staffcard/:index"
            component={StaffDetails}
          />
        </Switch>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    // staflst:{
    //     border:"1px solid #C8C8C8",
    //     width:"250px",
    //     height:'auto',
    //     position:"relative",
    //     left:'500px'
    // },
    container: {
      // border: '1px solid black',
      position: "relative",
      left: "100px",
      top: "20px",
      width: "70%",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      color: "#7f7272",
      cursor: "pointer",
    },
    gridcontainer: {
      display: "flex",
      justifyContent: "center",
    },
    getItems: {
      cursor: "pointer",
    },
  })
);

export default StaffList;
