import React from 'react'
import { ProfileController, ProfileControllerType } from '../../controller/ProfileController';
import { useEffect, useState, EffectCallback } from "react";
import { useAppContext } from "../../../context/AuthContext";

interface ProfileServiceType {
    loading:boolean;
    getQuotes:Function;
    quotes:any;
    getCurrencies:Function;
    newValue:any;
    total:any;
}


export function ProfileService(): ProfileServiceType {
    const {axiosQuotes, axiosCurrencies, axiosGetAllTransactions} : ProfileControllerType = ProfileController();
    const [loading, setLoading] = useState<boolean>(false);
    const [quotes, setQuotes] = useState<string>();
    const [newValue, setNewValue] = useState<any>(0);
    const [total,setTotal] = useState<any>([]);
    const { authData } = useAppContext();
    const userId = authData?.user.id;

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
    getAllTransactions();
  });

  const getAllTransactions = () => {
    setLoading(true);
    axiosGetAllTransactions(userId)
      .then((result: any) => {
        //setAllNewWordsData(result.data.data);
        let totalBill = 0;
        let totalCredit = 0;
        console.log(result[0].data.data);
        console.log(result[1].data.data);
        result[0].data.data.forEach((el:any) => {
          totalBill+=el.amount;
        });
        result[1].data.data.forEach((el:any) => {
          totalCredit+=el.amount;
        });
        setTotal(()=>[totalBill,totalCredit]);
        //setTransactionsData(() => [...result[0].data.data, ...result[1].data.data]);
      })
      .catch((error: any) => {
      });
    // .finally(() => setLoading(false));
  };

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
    total,
  };
}

export type {ProfileServiceType};