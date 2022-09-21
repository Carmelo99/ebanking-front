import { Box, Button, Container, CssBaseline, Grid, InputAdornment, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles/CreditStyle";
import * as yup from "yup";
import CreditService, { CreditServiceType } from './service/CreditService';

interface FilterDataType {
  type:string;
  amount:number;
}

function Credit() {
const classes = useStyles();
const [filterData, setFilterData] = useState<FilterDataType>();
const {applyForCredit}:CreditServiceType = CreditService();

const validationSchema = yup.object().shape({
  type: yup.string().required("Tip kredita je obavezno polje"),
  amount: yup.string().required("Iznos je obavezno polje"),

});



const handleSearch = (values: any) => {
  console.log(values);
  applyForCredit(values.type,values.amount);
};

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
                <Formik
                  initialValues={{
                    type: filterData?.type ?? "",
                    amount: filterData?.amount ?? "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSearch}
                >
                  {({ handleChange, handleBlur, touched, errors, values }) => (
                    <Form className={classes.form}>
                        <Box sx={{ display: "flex", alignItems: "flex-end",marginBottom:"15px" }}>
                          <TextField
                            id="type"
                            name="type"
                            placeholder="Unesite tip kredita"
                            variant="standard"
                            label={"Tip kredita"}
                            InputLabelProps={{style:{color:"white"}}}
                            value={values.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            error={touched.type && Boolean(errors.type)}
                            helperText={touched.type && errors.type}
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
                              Apliciraj za kredit
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

export default Credit