import axios from "axios";
import LoginDto from "../../dto/LoginDto";
import Endpoints from "../../constants/Endpoints";

interface PublicControllerType {
  axiosLogin: any;
}

export function PublicController(): PublicControllerType {
  const axiosLogin = (data:LoginDto) => {
    return axios.post(Endpoints.AUTHENTICATE, data);
  };

  return { axiosLogin };
}

export type { PublicControllerType };