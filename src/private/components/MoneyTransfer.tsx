import { Box, Button, Container, CssBaseline, Grid, InputAdornment, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles/MoneyTransferStyle";
import * as yup from "yup";
import MoneyTransferService, { MoneyTransferServiceType } from './service/MoneyTransferService';

interface FilterDataType {
  first_name:string;
  last_name:string;
  amount:number;
}

function MoneyTransfer() {
const classes = useStyles();
const [filterData, setFilterData] = useState<FilterDataType>();
const {transferMoney}:MoneyTransferServiceType = MoneyTransferService();

const validationSchema = yup.object().shape({
  first_name: yup.string().required("Ime je obavezno polje"),
  last_name: yup.string().required("Prezime je obavezno polje"),
  amount: yup.string().required("Iznos je obavezno polje"),

});



const handleSearch = (values: any) => {
  console.log(values);
  transferMoney(values.first_name,values.last_name,values.amount);
};

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
                <Formik
                  initialValues={{
                    first_name: filterData?.first_name ?? "",
                    last_name: filterData?.last_name ?? "",
                    amount: filterData?.amount ?? "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSearch}
                >
                  {({ handleChange,handleBlur, touched, errors, values }) => (
                    <Form className={classes.form}>
                      <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="first_name"
                            name="first_name"
                            placeholder="Unesite ime"
                            variant="standard"
                            label={"Ime"}
                            InputLabelProps={{style:{color:"white"}}}
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            error={touched.first_name && Boolean(errors.first_name)}
                            helperText={touched.first_name && errors.first_name}
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
                            id="last_name"
                            name="last_name"
                            label={"Unesite prezime"}
                            InputLabelProps={{style:{color:"white"}}}
                            placeholder={"Prezime"}
                            variant="standard"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            error={touched.last_name && Boolean(errors.last_name)}
                            helperText={touched.last_name && errors.last_name}
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
                            onBlur={handleBlur}
                            fullWidth
                            error={touched.amount && Boolean(errors.amount)}
                            helperText={touched.amount && errors.amount}
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
                              Prebaci iznos
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

export default MoneyTransfer