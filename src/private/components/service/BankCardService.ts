import axios from "axios";
import { useEffect, useState, EffectCallback } from "react";
import { BankCardController, BankCardControllerType } from "../../controller/BankCardController";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DeleteIcon from '@mui/icons-material/Delete';
import BankCardDto from "../../../dto/BankCardDto";
import UserSwitchToAdminDto from "../../../dto/UserSwitchToAdmin";
import { useAppContext } from "../../../context/AuthContext";

interface BankCardServiceType {
  cardData:any;
    getAllBankCards: Function;
    loading:boolean;
    tableActions:any;
  }


  export default function BankCardService(): BankCardServiceType {
    const { axiosGetAllBankCards, axiosDeleteBankCard, axiosTakeBankCard }: BankCardControllerType =BankCardController();
    const [cardData, setCardData] = useState<any>([]);
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
    getAllBankCards();
  });

  const getAllBankCards = () => {
    setLoading(true);
    axiosGetAllBankCards()
      .then((result: any) => {
        //setAllNewWordsData(result.data.data);
        console.log(result);
        setCardData(result.data.data);
      })
      .catch((error: any) => {
      });
    // .finally(() => setLoading(false));
  };


  let tableActions: Array<any> = [
    {
      icon:  CheckCircleIcon,
      tooltip: "Uzmi karticu",
      iconProps: { style: { fontSize: "35px", color: "red" } },
      position: "row",
      onClick: (e: any, rowData: any) => takeBankCard(rowData, authData?.user.id),
    },
    {
      icon: DeleteIcon,
      tooltip: "Obrisi karticu",
      iconProps: { style: { fontSize: "35px", color: "red" } },
      position: "row",
      onClick: (e: any, rowData: any) => deleteBankCard(rowData),
    },
  ];

  const deleteBankCard = (bankCardDto: BankCardDto) => {
    axiosDeleteBankCard(bankCardDto.card_number)
      .then((response: any) => {
        getAllBankCards();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };

  const takeBankCard = (bankCardDto: BankCardDto, id:any) => {
    axiosTakeBankCard(bankCardDto.card_number, id)
      .then((result: any) => {
        getAllBankCards();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };



    return {
      getAllBankCards,
        cardData,
        loading,
        tableActions,
      };
    }
    
    export type { BankCardServiceType };