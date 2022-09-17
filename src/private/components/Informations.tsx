import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { CssBaseline } from "@mui/material";
import MaterialTable from "material-table";
import { useState } from "react";
import useStyles from "./styles/InformationsStyle";
import InformationsService, { InformationsServiceType } from './service/InformationsService';

// TABLE ICONS
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};


//TABLE ICONS

function Transactions() {
  const classes = useStyles();
  const {usersData,loading,tableActions} : InformationsServiceType = InformationsService();
  return (
    <>
    <CssBaseline />
    <MaterialTable
      columns={[
        {
          field: "id",
          title: "Id korisnika",
        },
        {
          field: "firstname",
          title: "Ime",
        },
        {
          field: "lastname",
          title: "Prezime",
        },
        {
          field: "username",
          title: "Korisnicko ime",
        },
        {
          field: "age",
          title: "Godine",
        },
        {
          field: "marital_status",
          title: "Bracni status",
        },
        {
          field: "employed",
          title: "Zaposlen",
        },
        {
          field: "monthly_income",
          title: "Mesecna primanja u din",
        },
        {
          field: "admin",
          title: "Admin",
        },
      ]}
      data={usersData}
      icons={tableIcons}
      title={"Korisnici"}
      actions={tableActions}
      isLoading={loading}
      options={{
        actionsColumnIndex: -1,
        sorting: true,
        search:true,
      }}
    />
  </>
  )
}

export default Transactions