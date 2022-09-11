import React from 'react'
import CreditController, { CreditControllerType } from '../../controller/CreditController';
import { useAppContext } from "../../../context/AuthContext";

interface CreditServiceType {
    applyForCredit:Function;
}

export default function CreditService():CreditServiceType {
    const {axiosApplyForCredit} : CreditControllerType = CreditController();
    const { authData } = useAppContext();

    const userId = authData?.user.id;

    const applyForCredit = (type:string,amount:number) => {
        axiosApplyForCredit(type,amount,userId)
          .then((result: any) => {
            console.log(result);
            //Dodati neko obavestenje
          })
          .catch((error: any) => {
            //react on error
          })
      };

  return {
    applyForCredit,
  }
      
    
}
export type {CreditServiceType};