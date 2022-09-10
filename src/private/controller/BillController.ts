import React from 'react'
import axios from "axios";
import Endpoints from "../../constants/Endpoints";
import BillDto from '../../dto/BillDto';

interface BillControllerType {
    axiosPayBill:Function;
}


export default function BillController():BillControllerType {

    const axiosPayBill = (payment_purpose:string,receiver:string,type:string,amount:number,user_id:number) => {
        return axios.post(`${Endpoints.BILL}`, {payment_purpose,receiver,type,amount,user_id});
      };

  return {
    axiosPayBill,
  }
}

export type {BillControllerType};