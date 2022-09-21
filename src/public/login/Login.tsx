import { AppBar, Box, Button, Container, CssBaseline, Grid, TextField, Toolbar, Typography } from '@mui/material'
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
        {/* <Grid container direction="row"> */}
          {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={2}> */}
            {/* <Link to="/" className={classes.link}> */}
              <Typography variant="h4" className={classes.title}>
                Ebanking application
              </Typography>
            {/* </Link> */}
          {/* </Grid> */}
          {/* <Grid item xs={0} sm={0} md={8} lg={8} xl={10} /> */}
        {/* </Grid> */}
      </Toolbar>
      <div
       style={{ 
        backgroundImage: `url("https://www.civista.bank/assets/img/search-background.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9,
      }}
      >
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
                    label={"Username"}
                    InputLabelProps={{style:{color:"white"}}}
                    name="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    InputProps={{
                      style : {
                        color: "white",
                        fontSize:"20px"
                      }
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom:"10px" }}>
                  <KeyIcon sx={{ color: Colors.OBSERVATORY, mr: 1, my: 0.5 }} />
                  <Password
                    label={"Password"}
                    name="password"
                    statePassword={values.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touchedPassword={touched.password}
                    errorsPassword={errors.password}
                    
                  />
                </Box>
                <div className={classes.submit}>
                  <Button type="submit" fullWidth variant="outlined" color="inherit" className={classes.submit}>
                    {"LOGIN"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
      </div>
    </>
  )
}

export default Login