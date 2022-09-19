import React from 'react'
import { ProfileController, ProfileControllerType } from '../../controller/ProfileController';
import { useEffect, useState, EffectCallback } from "react";

interface ProfileServiceType {
    loading:boolean;
    getQuotes:Function;
    quotes:any;
    getCurrencies:Function;
    newValue:any;
}


export function ProfileService(): ProfileServiceType {
    const {axiosQuotes, axiosCurrencies} : ProfileControllerType = ProfileController();
    const [loading, setLoading] = useState<boolean>(false);
    const [quotes, setQuotes] = useState<string>();
    const [newValue, setNewValue] = useState<any>(0);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, []);

    const useEffectOnce = (effect: EffectCallback) => {
        useEffect(effect, []);
      };
      
  useEffectOnce(() => {
    getQuotes();
  });

    const getQuotes = () => {
        axiosQuotes()
          .then((result: any) => {
            console.log(result.data.data[0].quoteText);
            setQuotes(result.data.data[0].quoteText);
          })
          .catch((error: any) => {
            //react on error
          })
      };

      const getCurrencies = (amount:number, currency:string) => {
        axiosCurrencies(amount,"USD",currency)
          .then((result: any) => {
            console.log(result);
            setNewValue(result.data.result);
          })
          .catch((error: any) => {
            //react on error
          })
      };

  return {
    loading,
    getQuotes,
    quotes,
    getCurrencies,
    newValue,
  };
}

export type {ProfileServiceType};