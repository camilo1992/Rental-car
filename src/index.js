import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CarContextProvider from "./context/Carcontext";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "./context/react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain={config.domain}
				client_id={config.clientId}
				redirect_uri={window.location.origin}
				audience={config.audience}
				onRedirectCallback={onRedirectCallback}
			>
				<CarContextProvider>
					<App />
				</CarContextProvider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
