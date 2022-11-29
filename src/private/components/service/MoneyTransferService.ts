import React from 'react'
import BillDto from '../../../dto/BillDto';
import MoneyTransferController, { MoneyTransferControllerType } from '../../controller/MoneyTransferController';
import { useAppContext } from "../../../context/AuthContext";

interface MoneyTransferServiceType {
  transferMoney:Function;
}

export default function MoneyTransferService():MoneyTransferServiceType {
    const {axiosTransferMoney} : MoneyTransferControllerType = MoneyTransferController();
    const { authData } = useAppContext();

    const userId = authData?.user.id;

    const transferMoney = (first_name:string,last_name:string,amount:number) => {
        axiosTransferMoney(first_name,last_name,amount,userId)
          .then((result: any) => {
            console.log(result);
            //Dodati neko obavestenje
          })
          .catch((error: any) => {
            //react on error
          })
      };

  return {
    transferMoney,
  }
      
    
}
export type {MoneyTransferServiceType};