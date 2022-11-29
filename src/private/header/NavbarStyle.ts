import makeStyles from "@mui/styles/makeStyles";
import Colors from "../../constants/Colors";


const useStyles = makeStyles((theme) => ({
    wrapper: {
      backgroundColor: Colors.OBSERVATORY
    },
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      marginLeft: theme.spacing(15),
      "&:hover": {
        color: "#FAD4FF",
        borderBottom: "1px solid white",
      },
    },
  }));

  export default useStyles;