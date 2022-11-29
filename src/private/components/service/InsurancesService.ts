import axios from "axios";
import { useEffect, useState, EffectCallback } from "react";
import { InsurancesController, InsurancesControllerType } from "../../controller/InsurancesController";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DeleteIcon from '@mui/icons-material/Delete';
import UserDto from "../../../dto/UserDto";
import UserSwitchToAdminDto from "../../../dto/UserSwitchToAdmin";
import InsuranceDto from "../../../dto/InsuranceDto";
import { useAppContext } from "../../../context/AuthContext";

interface InsurancesServiceType {
    insuranceData:any;
    getAllInsurances: Function;
    loading:boolean;
    tableActions:any;
  }


  export default function InsurancesService(): InsurancesServiceType {
    const { axiosGetAllInsurances, axiosTakeInsurance, axiosDeleteInsurance }: InsurancesControllerType =InsurancesController();
    const [insuranceData, setInsuranceData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { authData } = useAppContext();

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
    getAllInsurances();
  });

  const getAllInsurances = () => {
    setLoading(true);
    axiosGetAllInsurances()
      .then((result: any) => {
        console.log(result);
        setInsuranceData(result.data.data);
      })
      .catch((error: any) => {
      });
    // .finally(() => setLoading(false));
  };


   let tableActions: Array<any> = [
    {
      icon:  CheckCircleIcon,
      tooltip: "Uzmite osiguranje",
      iconProps: { style: { fontSize: "35px", color: "red" } },
      position: "row",
      onClick: (e: any, rowData: any) => takeInsurance(rowData, authData?.user.id),
    },
    {
      icon: DeleteIcon,
      tooltip: "Obrisite osiguranje",
      iconProps: { style: { fontSize: "35px", color: "red" } },
      position: "row",
      onClick: (e: any, rowData: any) => deleteInsurance(authData?.user.id),
    },
   ];

  const deleteInsurance = (id: any) => {
    axiosDeleteInsurance(id)
      .then((response: any) => {
        getAllInsurances();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };

  const takeInsurance = (insuranceDto: InsuranceDto, id:any) => {
    axiosTakeInsurance(insuranceDto.code, id)
      .then((result: any) => {
        getAllInsurances();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };


    return {
        getAllInsurances,
        insuranceData,
        loading,
        tableActions,
      };
    }
    
    export type { InsurancesServiceType };