import { useState } from "react";
import { useAppContext } from "../context/AuthContext";
import { PublicController, PublicControllerType } from "./login/PublicController";

interface PublicServiceType {
  login: any;
}

export default function PublicService(): PublicServiceType {

    const { axiosLogin }: PublicControllerType = PublicController();
    const {  authData,updateAuthData } = useAppContext();

    const login = (values: any, actions: any) => {
      console.log(values.username,values.password);
        axiosLogin(values)
          .then((result: any) => {
            console.log(result.data.data);
            console.log(authData);
            updateAuthData(result.data.data);
          })
          .catch((error: any) => {
           // handleErrorMessage(showMessage, error);
          });
        actions.setSubmitting(false);
      };


    return { login };
}

export type { PublicServiceType };

function updateAuthData(data: any) {
  throw new Error("Function not implemented.");
}
