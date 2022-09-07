import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import i18n from "i18n-js";
import { ConfirmProvider } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { AppContext } from "../context/AuthContext";
import AuthData from "../model/AuthData";
declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const STORE_NAME = "ebanking-token";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.OBSERVATORY,
      contrastText: Colors.WHITE,
    },
    secondary: {
      main: "#ffd0db",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "0px 0px 0px 5px",
        },
      },
    },
  },
});

export default function Store(props: any) {
  const [authData, setAuthData] = useState(localStorage.getItem(STORE_NAME) || "");





  const updateAuthData = (data: string) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORE_NAME, jsonData);
    setAuthData(jsonData);
  };

  const deleteAuthData = () => {
    setAuthData("");
    localStorage.removeItem(STORE_NAME);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <ConfirmProvider>
          <AppContext.Provider
            value={{
              authData: authData && authData !== "" ? (JSON.parse(authData) as AuthData) : undefined,
              updateAuthData,
              deleteAuthData,
            }}
          >
            {props.children}
          </AppContext.Provider>
        </ConfirmProvider>
      </ThemeProvider>
    </>
  );
}
