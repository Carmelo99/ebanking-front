import { Box, Button, Container, CssBaseline, Grid, InputAdornment, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles/BillStyle";
import * as yup from "yup";
import BillService, { BillServiceType } from './service/BillService';

interface FilterDataType {
  payment_purpose:string;
  receiver:string;
  type:string;
  amount:number;
  sender:string;
}

function Bill() {
const classes = useStyles();
const [filterData, setFilterData] = useState<FilterDataType>();
const {payBill}:BillServiceType = BillService();

const validationSchema = yup.object().shape({
  payment_purpose: yup.string().required("Svra uplate je obavezno polje"),
  receiver: yup.string().required("Primalac je obavezno polje"),
  type: yup.string().required("Tip racuna je obavezno polje"),
  amount: yup.string().required("Iznos je obavezno polje"),

});



const handleSearch = (values: any) => {
  console.log(values);
  payBill(values.payment_purpose,values.receiver,values.type,values.amount);
};

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
                <Formik
                  initialValues={{
                    payment_purpose: filterData?.payment_purpose ?? "",
                    receiver: filterData?.receiver ?? "",
                    type: filterData?.type ?? "",
                    amount: filterData?.amount ?? "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSearch}
                >
                  {({ handleChange, values }) => (
                    <Form className={classes.form}>
                      <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="payment_purpose"
                            name="payment_purpose"
                            placeholder="Unesite svrhu uplate"
                            variant="standard"
                            label={"Svrha uplate"}
                            InputLabelProps={{style:{color:"white"}}}
                            value={values.payment_purpose}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                              style : {
                                color: "white",
                                fontSize:"20px"
                              },
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="receiver"
                            name="receiver"
                            label={"Unesite primaoca"}
                            InputLabelProps={{style:{color:"white"}}}
                            placeholder={"Primalac"}
                            variant="standard"
                            value={values.receiver}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                              style : {
                                color: "white",
                                fontSize:"20px"
                              },
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="type"
                            name="type"
                            placeholder="Unesite tip racuna"
                            variant="standard"
                            label={"Tip racuna"}
                            InputLabelProps={{style:{color:"white"}}}
                            value={values.type}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                              style : {
                                color: "white",
                                fontSize:"20px"
                              },
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="amount"
                            name="amount"
                            placeholder="Unesite iznos"
                            variant="standard"
                            label={"Iznos"}
                            InputLabelProps={{style:{color:"white"}}}
                            value={values.amount}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                              style : {
                                color: "white",
                                fontSize:"20px"
                              },
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                          <div className={classes.buttons}>
                            <Button type="submit" variant="contained" color="primary">
                              Plati racun
                            </Button>
                          </div>
                    </Form>
                  )}
                </Formik>
                </div>
            </Container>
                </>
  )
}

export default Bill