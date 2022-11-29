import axios from "axios";
import Endpoints from "../../constants/Endpoints";
import UserDto from "../../dto/UserDto";
import UserSwitchToAdminDto from "../../dto/UserSwitchToAdmin";

interface BankCardControllerType {
  axiosGetAllBankCards: Function;
    axiosDeleteBankCard:Function;
    axiosTakeBankCard:Function;
  }

  export function BankCardController(): BankCardControllerType {

    
    const axiosConfig = (params?: Object) => {
      return {
        params: params ? params : {},
      };
    };

  
  
    
    const axiosGetAllBankCards = () => {
        return axios.get(Endpoints.BANK_CARD + "/get-all");
      };

      const axiosDeleteBankCard = (id: number) => {
        return axios.delete(`${Endpoints.BANK_CARD}/${id}`);
      };

      const axiosTakeBankCard = (card: number,id:number) => {
        return axios.patch(`${Endpoints.BANK_CARD}/take-card/${id}/${card}`)
      };
  
  
    return {
      axiosGetAllBankCards,
        axiosDeleteBankCard,
        axiosTakeBankCard,
    };
  }
  
  export type { BankCardControllerType };