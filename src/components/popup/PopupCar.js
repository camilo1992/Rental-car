import React, { Fragment } from "react";
import Overlay from "./Overlay";
import classes from "./PopupCar.module.css";
import Button from "../types/Button";
import { useContext } from "react";
import { carContext } from "../../context/Carcontext";

function PopupCar(props) {
  const cardCtx = useContext(carContext);

  return (
    <Fragment>
      <Overlay />
      <div className={classes.containerPopup}>
        <div
          className={classes.popup}
          style={{ backgroundImage: `url(${cardCtx.car.img})` }}
        ></div>
        <div className={classes.content}>
          <div className={classes.desc}>
            <p>{cardCtx.car.description}</p>
          </div>
          <div className={classes.position}>
            <Button>Book</Button>
            <Button onClick={cardCtx.handleClick}>close</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PopupCar;
