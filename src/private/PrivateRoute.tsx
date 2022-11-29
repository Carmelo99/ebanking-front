import Navbar from "./header/Navbar";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";
import Bill from "./components/Bill";
import Credit from "./components/Credit";
import Informations from "./components/Informations";
import { Route, Switch } from "react-router-dom";
import { useAppContext } from "../context/AuthContext";
import BankCards from "./components/BankCards";
import Insurances from "./components/Insurances";
import MoneyTransfer from "./components/MoneyTransfer";

export default function PrivateRoute() {
  const { authData } = useAppContext();
  const isAdmin = authData?.user.admin;

  return (
    <>
    <Navbar />
    <div style={{ 
      backgroundImage: `url("https://www.civista.bank/assets/img/search-background.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/bill" component={Bill} />
        <Route path="/credit" component={Credit} />
        <Route path="/card" component={BankCards} />
        <Route path="/insurances" component={Insurances} />
        <Route path="/transfer" component={MoneyTransfer} />
        {isAdmin && <Route path="/info" component={Informations} />}
      </Switch>
      </div>
      </>
  );

}
