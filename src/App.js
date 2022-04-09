import Home from "./components/home/Home";
import { Route, Switch, Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import RentCar from "./components/rent-car/RentCar";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";

function App(props) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute path="/rent-car">
            <Layout>
              <RentCar />
            </Layout>
            <Footer />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Layout>
              <Profile />
            </Layout>
            <Footer />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
