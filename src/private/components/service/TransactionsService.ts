import axios from "axios";
import { useEffect, useState, EffectCallback } from "react";
import { TransactionsController, TransactionsControllerType } from "../../controller/TransactionsController";
import { useAppContext } from "../../../context/AuthContext";

interface TransactionsServiceType {
    transactionsData:any;
    getAllTransactions: Function;
    loading:boolean;
  }


  export default function TransactionsService(): TransactionsServiceType {
    const { axiosGetAllTransactions }: TransactionsControllerType =TransactionsController();
    const [transactionsData, setTransactionsData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
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
    getAllTransactions();
  });

  const getAllTransactions = () => {
    setLoading(true);
    axiosGetAllTransactions(userId)
      .then((result: any) => {
        //setAllNewWordsData(result.data.data);
        console.log(result);
        setTransactionsData(() => [...result[0].data.data, ...result[1].data.data]);
      })
      .catch((error: any) => {
      });
    // .finally(() => setLoading(false));
  };


    return {
        getAllTransactions,
        transactionsData,
        loading,
      };
    }
    
    export type { TransactionsServiceType };