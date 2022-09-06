import { useEffect, useState } from "react";
import './App.css';
import { isadmin } from "./context/AuthContext";
import PrivateRoute from "./private/PrivateRoute";
import PublicRoute from "./public/PublicRoute";

function App() {

  
  return isadmin ? <PrivateRoute/> : <PublicRoute/>;
}

export default App;
