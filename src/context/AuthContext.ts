import { createContext, useContext, useState } from "react";
import AuthData from "../model/AuthData";

interface AppContextProps {
    // isadmin:any,
    authData: AuthData | undefined;
    updateAuthData: (data: any) => void;
    deleteAuthData: () => void;
  }

  export let isadmin = false;


export const AppContext = createContext({} as AppContextProps);

export function useAppContext() {
  return useContext(AppContext);
}