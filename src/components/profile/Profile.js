import classes from "./Profile.module.css";
import React, { Fragment } from "react";
import { useAuth0 } from "../../context/react-auth0-spa";
import SavedCars from "./SavedCars";
import { useContext } from "react";
import { carContext } from "../../context/Carcontext";

function Profile() {
  const carctx = useContext(carContext);
  console.log(carctx);

  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  console.log(user.picture);

  return (
    <div className={classes.profileContainer}>
      <div className={classes.picutureContainer}>
        <img className={classes.picture} src={user.picture} alt="Profile" />
        <div className={classes.inf}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <SavedCars
          days={carctx.car.days}
          model={carctx.car.model}
          totalCost={carctx.car.totalPrice}
          img={carctx.car.img}
          license={carctx.car.license}
          colour={carctx.car.colour}
          type={carctx.car.mode}
          // img={user.picture}
        />
      </div>
    </div>
  );
}

export default Profile;
