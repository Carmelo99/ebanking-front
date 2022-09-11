import React from 'react'
import axios from "axios";
import Endpoints from "../../constants/Endpoints";

interface CreditControllerType {
    axiosApplyForCredit:Function;
}


export default function CreditController():CreditControllerType {

    const axiosApplyForCredit = (type:string,amount:number,user_id:number) => {
        return axios.post(`${Endpoints.CREDIT}`, {type,amount,user_id});
      };

  return {
    axiosApplyForCredit,
  }
}

export type {CreditControllerType};