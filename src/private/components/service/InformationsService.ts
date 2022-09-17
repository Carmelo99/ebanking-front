import axios from "axios";
import { useEffect, useState, EffectCallback } from "react";
import { InformationsController, InformationsControllerType } from "../../controller/InformationsController";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DeleteIcon from '@mui/icons-material/Delete';
import UserDto from "../../../dto/UserDto";
import UserSwitchToAdminDto from "../../../dto/UserSwitchToAdmin";

interface InformationsServiceType {
    usersData:any;
    getAllUsers: Function;
    loading:boolean;
    tableActions:any;
  }


  export default function InformationsService(): InformationsServiceType {
    const { axiosGetAllUsers, axiosSwitchToAdmin, axiosDeleteUser }: InformationsControllerType =InformationsController();
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


  let tableActions: Array<any> = [
    (rowData: any) => ({
      icon: rowData.admin === false ? UnpublishedIcon : CheckCircleIcon,
      tooltip: rowData.admin === false ? "Dodajte admin ulogu" : "Skinite admin ulogu",
      onClick: rowData.admin === false ? (e: any, rowData: any) => switchToAdmin(rowData, true) : (e: any, rowData: any) => switchToAdmin(rowData, false),
    }),
    {
      icon: DeleteIcon,
      tooltip: "Obrisi korisnika iz baze",
      iconProps: { style: { fontSize: "35px", color: "red" } },
      position: "row",
      onClick: (e: any, rowData: any) => deleteUser(rowData),
    },
  ];

  const deleteUser = (userDto: UserDto) => {
    axiosDeleteUser(userDto.id)
      .then((response: any) => {
        getAllUsers();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };

  const switchToAdmin = (userSwitchToAdminDto: UserSwitchToAdminDto, isAdmin:boolean) => {
    userSwitchToAdminDto.admin=isAdmin;
    axiosSwitchToAdmin(userSwitchToAdminDto.id, userSwitchToAdminDto.admin)
      .then((result: any) => {
        getAllUsers();
        setLoading(false);
      })
      .catch((error: any) => {
        //
      });
  };


    return {
        getAllUsers,
        usersData,
        loading,
        tableActions,
      };
    }
    
    export type { InformationsServiceType };