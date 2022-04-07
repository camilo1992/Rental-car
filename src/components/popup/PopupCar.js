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
            <p>clio</p>
            {/* <p>{cardCtx.car.model}</p>
            <p>{cardCtx.car.priceDay}</p>
            <p>{cardCtx.car.license}</p>
            <p>{cardCtx.car.totalDays}</p> */}
          </div>
          <div className={classes.desc2}>
            <p> License: vgs-123</p>
            <p>Days: 5 dias</p>
            <p>Cost per day: 120</p>
            <br />
            <p>Total: 620</p>
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
