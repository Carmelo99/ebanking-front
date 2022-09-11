import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./NavbarStyle";
import DrawerComponent from "../drawer/DrawerComponent";
import { PrivateService, PrivateServiceType } from "../PrivateService";
import { ListItemButton } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAppContext } from "../../context/AuthContext";

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const {logout} : PrivateServiceType = PrivateService();
  const { authData } = useAppContext();
  const isAdmin = authData?.user.admin;

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ebanking application
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (  
          <div className={classes.navlinks}>
            <Link to="/"  className={classes.link}>
              Profile
            </Link>
            <Link to="/transactions"  className={classes.link}>
              My transactions
            </Link>
            <Link to="/bill"  className={classes.link}>
              Bill pay
            </Link>
            <Link to="/credit"  className={classes.link}>
              Credit apply
            </Link>
            {isAdmin &&
            <Link to="/info"  className={classes.link}>
              Informations
            </Link>
            }
            <List>
            <ListItemButton onClick={logout}>
            <ListItemText primary={"LOGOUT"} />
          </ListItemButton>
            </List>
          </div>
          
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;