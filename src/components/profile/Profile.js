import classes from "./Profile.module.css";
import React, { Fragment } from "react";
import { useAuth0 } from "../../context/react-auth0-spa";

function Profile() {
	const { loading, user } = useAuth0();

	if (loading || !user) {
		return <div>Loading...</div>;
	}

	return (
		<Fragment>
			<img src={user.picture} alt="Profile" />

			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<code>{JSON.stringify(user, null, 2)}</code>
		</Fragment>
	);
}

export default Profile;
