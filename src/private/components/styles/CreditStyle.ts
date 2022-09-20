import makeStyles from "@mui/styles/makeStyles";
import Colors from "../../../constants/Colors";


const useStyles = makeStyles((theme: any) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    marginTop: "10vh", 
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 1, 2),
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    display: "none",
    textDecoration: "none",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;