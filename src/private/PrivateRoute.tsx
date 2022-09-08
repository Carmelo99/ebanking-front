import Navbar from "./header/Navbar";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";
import Bill from "./components/Bill";
import Credit from "./components/Credit";
import Informations from "./components/Informations";
import { Route, Switch } from "react-router-dom";
import { useAppContext } from "../context/AuthContext";

export default function PrivateRoute() {
  const { authData } = useAppContext();
  const isAdmin = authData?.user?.admin?.valueOf;

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/bill" component={Bill} />
        <Route path="/credit" component={Credit} />
        {isAdmin && <Route path="/info" component={Informations} />}
      </Switch>
      </>
  );

}
