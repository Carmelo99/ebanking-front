import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useAppContext } from "../../context/AuthContext";
import { useState } from 'react';
import { ProfileService, ProfileServiceType } from './service/ProfileService';
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import useStyles from "./styles/ProfileStyle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


//CHART
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bill/Credit',
    },
  },
};

const labels = ['Total'];
//CHART

//CHART
const data = {
  labels,
  datasets: [
    {
      label: 'Bill',
      data: labels.map(() => 1),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Credit',
      data: labels.map(() => 2),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
//CHART


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost/">
        Ebanking application
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FilterDataType {
  payment_purpose:string;
}


function PricingContent() {
  const { authData } = useAppContext();
  const imePrezime = authData?.user.firstname+" "+authData?.user.lastname;
  const {quotes, getCurrencies, newValue, total} : ProfileServiceType = ProfileService();
  const iznos = authData?.user.monthly_income;
  const classes = useStyles();
const [filterData, setFilterData] = useState<FilterDataType>();

//CHART
const data = {
  labels,
  datasets: [
    {
      label: 'Bill',
      data: labels.map(() => total[0]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Credit',
      data: labels.map(() => total[1]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
//CHART


  const validationSchema = yup.object().shape({
    payment_purpose: yup.string().required("Svra uplate je obavezno polje"),
  
  });
  
  const [currency, setCurrency] = useState<string>('');

  
  const handleSearchCurrencies = () => {
    console.log(currency+" "+iznos);
    getCurrencies(currency,iznos);
  };
  const handleSearch = () => {

  };

  const tiers = 
    {
      title: 'Vaše stanje na računu:',
      price: iznos,
    };
 

  const valuesForSelect : Array<any> = [
    {
    usd : "USD",
    eur : "EUR",
    rsd : "RSD",
    }
  ];

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
         Welcome, {imePrezime}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          {quotes}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/* {tiers.map((tier) => ( */}
            <Grid
              item
              key={'Vaše stanje na računu:'}
              xs={12}
              // sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={'Vaše stanje na računu:'}
                  titleTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${iznos}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  {newValue!==0 ?
                    <Typography component="h4" variant="h5" color="text.primary">
                      {newValue}
                    </Typography>
                     : [] } 
                     </Box>
                     <Box>
                <Formik
                  initialValues={{
                    payment_purpose: filterData?.payment_purpose ?? "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSearch}
                >
                  {({ handleChange, values }) => (
                    <Form className={classes.form}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                      <Select
                        id="currency"
                      value={currency}
                      label="demo-simple-select-label"
                    onChange={(e: any) => {
                      console.log(e.target.value);
                      setCurrency(e.target.value);
                      console.log(iznos);
                    }}
                    onBlur= {(e:any) => {
                      console.log(currency);
                    }}
                    >
                <MenuItem value={valuesForSelect[0].usd}>USD</MenuItem>
                  <MenuItem value={valuesForSelect[0].eur}>EUR</MenuItem>
                  <MenuItem value={valuesForSelect[0].rsd}>RSD</MenuItem>
                  </Select>
                  </FormControl>
                        </Box>
                          <div className={classes.buttons}>
                            <Button type="submit" variant="contained" color="primary" onClick={handleSearchCurrencies}>
                              Confirm currency
                            </Button>
                          </div>
                    </Form>
                  )}
                </Formik>
                </Box>
                {/* </div>
            </Container> */}
                </CardContent>
              </Card>
            </Grid>
          {/* ) */}
          {/* )} */}
        </Grid>
      </Container>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
       <Bar options={options} data={data} />;
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}