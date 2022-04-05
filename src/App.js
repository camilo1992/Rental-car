import Home from "./components/home/Home";
import { useState } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import RentCar from "./components/rent-car/RentCar";
import LoginForm from "./components/logIn/LoginForm";
function App(props) {
  const [activeRent, setActiveRent] = useState(true);

  const rentHandler = () => {
    console.log("clicked");
    setActiveRent(null);
  };

  return (
    <div>
      <Route path="/" exact>
        <Home />
        {/* <LoginForm /> */}
      </Route>
      <Route path="/rent-car">
        <Layout>
          <RentCar />
        </Layout>
        <Footer />
      </Route>
    </div>
    // {activeRent && <Home onShowRent={rentHandler} />};
  );
}

export default App;
// https://github.com/cluedevs/ESL_back/blob/main/api/api-gateway-openapi.yaml
// https://editor.swagger.io/
