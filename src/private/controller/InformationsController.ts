import axios from "axios";
import Endpoints from "../../constants/Endpoints";

interface InformationsControllerType {
    axiosGetAllUsers: Function;
  }

  export function InformationsController(): InformationsControllerType {

    
    const axiosConfig = (params?: Object) => {
      return {
        params: params ? params : {},
      };
    };
  
  
    
    const axiosGetAllUsers = () => {
        return axios.get(Endpoints.USERS + "/list");
      };
  
  
    return {
        axiosGetAllUsers,
    };
  }
  
  export type { InformationsControllerType };