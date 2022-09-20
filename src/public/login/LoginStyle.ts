import makeStyles from "@mui/styles/makeStyles";
import Colors from "../../constants/Colors";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: Colors.OBSERVATORY
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    //marginTop: theme.spacing(1),
  },
  submit: {
    //margin: theme.spacing(2, 1, 2),
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  link: {
    color: Colors.WHITE,
    textDecoration: "none",
  },
  title: {
    display: "none",
    color: Colors.WHITE,
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("xl")]: {
      display: "block",
    },
  },
}));

export default useStyles;