import axios from "axios";
import Endpoints from "../../constants/Endpoints";

interface TransactionsControllerType {
    axiosGetAllTransactions: Function;
  }

  export function TransactionsController(): TransactionsControllerType {

    
    const axiosConfig = (params?: Object) => {
      return {
        params: params ? params : {},
      };
    };
  
    const axiosGetAllBillByUser = (user_id:number) => {
      return axios.get(Endpoints.BILL + "/list", { params: { user_id: user_id } });
    };
  
    
    const axiosGetAllCreditByUser = (user_id:number) => {
        return axios.get(Endpoints.CREDIT + "/list", { params: { user_id: user_id } });
      };

    const axiosGetAllTransactions = (user_id:number) => {
      return axios
        .all([axiosGetAllBillByUser(user_id), axiosGetAllCreditByUser(user_id)])
        .then(
          axios.spread((...responses) => {
            return responses;
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
  
  
    return {
        axiosGetAllTransactions,
    };
  }
  
  export type { TransactionsControllerType };
  

