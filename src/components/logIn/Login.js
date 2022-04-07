import React from "react";
import { useAuth0 } from "../../context/react-auth0-spa";

const Login = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	return (
		<div>
			{!isAuthenticated && (
				<li onClick={() => loginWithRedirect({})}>Log In / Register </li>
			)}
			{isAuthenticated && <li onClick={() => logout()}>Log out </li>}
		</div>
	);
};

export default Login;
