import React from "react";
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
} from "@material-ui/core";
import StudentsList from "./StudentsList";
import StaffList from "./StaffList";
import HouseList from "./HouseList";
import CharactersList from "./CharactersList";
import { NavLink, Route, Switch } from "react-router-dom";

const backImg = "https://wallpapercave.com/wp/wp2141444.jpg";
// const backImg = 'https://i.pinimg.com/originals/2f/35/9a/2f359a14af5d4ef9417b0688286986e5.jpg'

const DashBoard = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Drawer
          variant="permanent"
          className={classes.permDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Divider />
          <List className={classes.list}>
            <ListItem>
              <NavLink to="/dashboard/characters" className={classes.nvLink}>
                <Button className={classes.btn}> all characters</Button>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to="/dashboard/studentslist" className={classes.nvLink}>
                <Button className={classes.btn}>all students</Button>
              </NavLink>
            </ListItem>
            <Divider />

            <ListItem>
              <NavLink to="/dashboard/stafflist" className={classes.nvLink}>
                <Button className={classes.btn}>staff</Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/dashboard/houses" className={classes.nvLink}>
                <Button className={classes.btn}>houses</Button>
              </NavLink>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </Box>

      <Box className={classes.body}>
        <Switch>
          <Route path="/dashboard/studentslist" component={StudentsList} />
          <Route path="/dashboard/stafflist" component={StaffList} />
          <Route path="/dashboard/characters" component={CharactersList} />
          <Route path="/dashboard/houses" component={HouseList} />
        </Switch>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      color: "#00000061",
      textTransform: "capitalize",
      fontSize: "22px",
    },
    drawerPaper: {
      display: "flex",
      width: "drawerWidth",
      backgroundColor: "#f3f3f3",
    },
    body: {
      backgroundImage: `url(${backImg})`,
      //backgroundPosition: "center-cover",
      backgroundSize: "cover",
      //backgroundAttachment: "fixed",
      height: "100vh",
      backgroundRepeat: "no-repeat",
    },
    nvLink: {
      textDecoration: "none",
    },
  })
);

export default DashBoard;
