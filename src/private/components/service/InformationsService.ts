import axios from "axios";
import { useEffect, useState, EffectCallback } from "react";
import { InformationsController, InformationsControllerType } from "../../controller/InformationsController";

interface InformationsServiceType {
    usersData:any;
    getAllUsers: Function;
    loading:boolean;
  }


  export default function InformationsService(): InformationsServiceType {
    const { axiosGetAllUsers }: InformationsControllerType =InformationsController();
    const [usersData, setUsersData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    

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
    getAllUsers();
  });

  const getAllUsers = () => {
    setLoading(true);
    axiosGetAllUsers()
      .then((result: any) => {
        //setAllNewWordsData(result.data.data);
        console.log(result);
        setUsersData(result.data.data);
      })
      .catch((error: any) => {
      });
    // .finally(() => setLoading(false));
  };


    return {
        getAllUsers,
        usersData,
        loading,
      };
    }
    
    export type { InformationsServiceType };