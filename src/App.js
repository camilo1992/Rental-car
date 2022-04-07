import Home from "./components/home/Home";
import { useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import RentCar from "./components/rent-car/RentCar";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";

function App(props) {
	const [activeRent, setActiveRent] = useState(true);

	const rentHandler = () => {
		console.log("clicked");
		setActiveRent(null);
	};

	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route path="/" exact>
						<Home />
						{/* <LoginForm /> */}
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
		// {activeRent && <Home onShowRent={rentHandler} />};
	);
}

export default App;
