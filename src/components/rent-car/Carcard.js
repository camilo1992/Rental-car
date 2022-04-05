import React from "react";
import classes from "./Carcard.module.css";
import Button from "../types/Button";
function Carcard(props) {
  return (
    <div className={classes.cardContainer}>
      <div
        className={classes.photo}
        style={{ backgroundImage: `url("${props.img}")` }}
      ></div>
      <div className={classes.textContainer}>
        <h1>{props.description}</h1>
        <Button onClick={props.onClick}>More</Button>
      </div>
    </div>
  );
}

export default Carcard;
