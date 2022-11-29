import axios from "axios";
import Endpoints from "../../constants/Endpoints";
import UserDto from "../../dto/UserDto";
import UserSwitchToAdminDto from "../../dto/UserSwitchToAdmin";

interface InsurancesControllerType {
  axiosGetAllInsurances: Function;
  axiosTakeInsurance: Function;
  axiosDeleteInsurance:Function;
  }

  export function InsurancesController(): InsurancesControllerType {

    
    const axiosConfig = (params?: Object) => {
      return {
        params: params ? params : {},
      };
    };

  
  
    
    const axiosGetAllInsurances = () => {
        return axios.get(Endpoints.INSURANCE + "/get-all");
      };

      const axiosTakeInsurance = (code:number, id:number) => {
        return axios.patch(`${Endpoints.INSURANCE}/take-insurance/${id}/${code}` );
      };

      const axiosDeleteInsurance = (id: number) => {
        return axios.delete(`${Endpoints.INSURANCE}/${id}`);
      };
  
  
    return {
      axiosGetAllInsurances,
      axiosTakeInsurance,
      axiosDeleteInsurance,
    };
  }
  
  export type { InsurancesControllerType };