import React from 'react'
import { useAppContext } from '../context/AuthContext';
import { useHistory } from "react-router";
import { PrivateController, PrivateControllerType } from "./PrivateController";

interface PrivateServiceType {
    logout: any;
}

export function PrivateService() {
    const {  authData, deleteAuthData, updateAuthData } = useAppContext();
    const history = useHistory();
    const {axiosLogout} : PrivateControllerType = PrivateController();
   
    const logout = () => {
        axiosLogout()
          .then((result: any) => {
            deleteAuthData();
            history.push("/");
          })
          .catch((error: any) => {
            //handleErrorMessage(showMessage, error);
          });
      };


  return {
   logout,
  };
}

export type {PrivateServiceType};