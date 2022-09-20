import React from 'react'
import axios from "axios";
import Endpoints from '../../constants/Endpoints';

interface ProfileControllerType {
    axiosQuotes: Function;
    axiosCurrencies:Function;
    axiosGetAllTransactions:Function;
}

export function ProfileController(): ProfileControllerType {

    const axiosQuotes = () => {
        return axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random");
      };

    const axiosCurrencies = (to:string,from:string,amount:number) => {
      return axios.get(`https://api.apilayer.com/exchangerates_data/convert?apikey=NDLIlZh6fYaXHd9e379JHP8bsC9qFFA2&to=${to}&from=${from}&amount=${amount}`);
    }; 


    const axiosGetAllBillByUser = (user_id:number) => {
      return axios.get(Endpoints.BILL + "/list", { params: { user_id: user_id } });
    };
  
    
    const axiosGetAllCreditByUser = (user_id:number) => {
        return axios.get(Endpoints.CREDIT + "/list", { params: { user_id: user_id } });
      };

    const axiosGetAllTransactions = (user_id:number) => {
      return axios
        .all([axiosGetAllBillByUser(user_id), axiosGetAllCreditByUser(user_id)])
        .then(
          axios.spread((...responses) => {
            return responses;
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };


  return {
    axiosQuotes,
    axiosCurrencies,
    axiosGetAllTransactions,
  };
}

export type {ProfileControllerType};