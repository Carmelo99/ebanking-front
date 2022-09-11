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
                  {({ handleChange, values }) => (
                    <Form className={classes.form}>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <TextField
                            id="type"
                            name="type"
                            placeholder="Unesite tip kredita"
                            variant="standard"
                            label={"Tip kredita"}
                            value={values.type}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          <TextField
                            id="amount"
                            name="amount"
                            placeholder="Unesite iznos"
                            variant="standard"
                            label={"Iznos"}
                            value={values.amount}
                            onChange={handleChange}
                            fullWidth
                            InputProps={{
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