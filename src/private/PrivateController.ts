import axios from 'axios';
import React from 'react'
import Endpoints from '../constants/Endpoints';

interface PrivateControllerType {
    axiosLogout: Function;
}

export function PrivateController() {

    const axiosLogout = () => {
        return axios.post(Endpoints.LOGOUT, {});
      };



  return {
    axiosLogout,
  };
}

export type {PrivateControllerType};