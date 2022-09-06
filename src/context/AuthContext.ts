import { createContext, useContext, useState } from "react";

interface AppContextProps {
    // isadmin:any,
  }

  export let isadmin = false;

export const AppContext = createContext({} as AppContextProps);

export function useAppContext() {
  return useContext(AppContext);
}