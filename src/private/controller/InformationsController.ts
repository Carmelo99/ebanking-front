import axios from "axios";
import Endpoints from "../../constants/Endpoints";
import UserDto from "../../dto/UserDto";
import UserSwitchToAdminDto from "../../dto/UserSwitchToAdmin";

interface InformationsControllerType {
    axiosGetAllUsers: Function;
    axiosSwitchToAdmin: Function;
    axiosDeleteUser:Function;
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

      const axiosSwitchToAdmin = (id:number, isadmin:boolean ) => {
        return axios.patch(`${Endpoints.USERS}/switchisadmin/${id}/${isadmin}` );
      };

      const axiosDeleteUser = (id: number) => {
        return axios.delete(`${Endpoints.USERS}/${id}`);
      };
  
  
    return {
        axiosGetAllUsers,
        axiosSwitchToAdmin,
        axiosDeleteUser,
    };
  }
  
  export type { InformationsControllerType };