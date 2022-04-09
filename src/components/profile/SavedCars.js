import React, { Fragment } from "react";
import classes from "./SavedCars.module.css";
import Button from "../types/Button";
function SavedCars(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <img src={props.img} className={classes.img} alt="Profile" />
        <div className={classes.content}>
          <div> Type: {props.type}</div>
          <div> Model: {props.model}</div>
          <div> Colour: {props.colour}</div>
          <div> License: {props.license}</div>
          <div> Days booked: {props.days} days</div>
          <div> Total cost: ${props.totalCost}</div>
        </div>
        <Button>confirm</Button>
      </div>
    </Fragment>
  );
}

export default SavedCars;
