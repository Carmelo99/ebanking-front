import React from 'react'
import BillDto from '../../../dto/BillDto';
import BillController, { BillControllerType } from '../../controller/BillController';
import { useAppContext } from "../../../context/AuthContext";

interface BillServiceType {
    payBill:Function;
}

export default function BillService():BillServiceType {
    const {axiosPayBill} : BillControllerType = BillController();
    const { authData } = useAppContext();

    const userId = authData?.user.id;

    const payBill = (payment_purpose:string,receiver:string,type:string,amount:number) => {
        axiosPayBill(payment_purpose,receiver,type,amount,userId)
          .then((result: any) => {
            console.log(result);
            //Dodati neko obavestenje
          })
          .catch((error: any) => {
            //react on error
          })
      };

  return {
    payBill,
  }
      
    
}
export type {BillServiceType};