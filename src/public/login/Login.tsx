import { Box, Button, Container, CssBaseline, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from "./LoginStyle";
import * as yup from "yup";
import Colors from '../../constants/Colors';
import KeyIcon from '@mui/icons-material/Key';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Password from './password/Password';
import PublicService, { PublicServiceType } from '../PublicService';


const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

function Login() {

    const classes = useStyles();

    const { login }: PublicServiceType = PublicService();
    
  return (
    <>
      <Toolbar style={{ backgroundColor: Colors.OBSERVATORY }}>
        <Grid container direction="row">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={2}>
            <Link to="/" className={classes.link}>
              <Typography textAlign={"center"} variant="h6" className={classes.title}>
                {"EBANKING APPLICATION"}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={0} sm={0} md={8} lg={8} xl={10} />
        </Grid>
      </Toolbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={login}
          >
            {({ handleBlur, values, touched, errors, handleChange, setFieldValue }) => (
              <Form className={classes.form}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountBoxIcon sx={{ color: Colors.OBSERVATORY, mr: 1, my: 0.5 }} />
                  <TextField
                    variant="standard"
                    margin="normal"
                    fullWidth
                    id="username"
                    label={"USERNAME"}
                    name="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <KeyIcon sx={{ color: Colors.OBSERVATORY, mr: 1, my: 0.5 }} />
                  <Password
                    label={"PASSWORD"}
                    name="password"
                    statePassword={values.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touchedPassword={touched.password}
                    errorsPassword={errors.password}
                  />
                </Box>
                <div className={classes.submit}>
                  <Button type="submit" fullWidth variant="outlined" color="primary" className={classes.submit}>
                    {"LOGIN"}
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

export default Login