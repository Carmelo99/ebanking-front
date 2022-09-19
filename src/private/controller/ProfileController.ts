import React from 'react'
import axios from "axios";

interface ProfileControllerType {
    axiosQuotes: Function;
    axiosCurrencies:Function;
}

export function ProfileController(): ProfileControllerType {

    const axiosQuotes = () => {
        return axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random");
      };

    const axiosCurrencies = (to:string,from:string,amount:number) => {
      return axios.get(`https://api.apilayer.com/exchangerates_data/convert?apikey=NDLIlZh6fYaXHd9e379JHP8bsC9qFFA2&to=${to}&from=${from}&amount=${amount}`);
    }; 


  return {
    axiosQuotes,
    axiosCurrencies,
  };
}

export type {ProfileControllerType};