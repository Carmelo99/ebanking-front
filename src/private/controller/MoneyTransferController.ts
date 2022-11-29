import React from 'react'
import axios from "axios";
import Endpoints from "../../constants/Endpoints";

interface MoneyTransferControllerType {
  axiosTransferMoney:Function;
}


export default function MoneyTransferController():MoneyTransferControllerType {

    const axiosTransferMoney = (firstname:string,lastname:string,amount:number,user_id:number) => {
        return axios.patch(`${Endpoints.USERS}/transfer-money/${firstname}/${lastname}/${amount}/${user_id}`);
      };

  return {
    axiosTransferMoney,
  }
}

export type {MoneyTransferControllerType};