import { useEffect, useState } from "react";
import './App.css';
import { isadmin } from "./context/AuthContext";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";
import { useAppContext } from "./context/AuthContext";
import axios from "axios";

function App() {
  const { authData,deleteAuthData } = useAppContext();

  axios.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        deleteAuthData();
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        deleteAuthData();
      }
      return Promise.reject(error);
    }
  );
  
  return authData ? <PrivateRoute/> : <PublicRoute/>;
}

export default App;
