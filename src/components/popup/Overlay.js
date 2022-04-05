import React from "react";
import classes from "./Overlay.module.css";
import { useContext } from "react";
import { carContext } from "../../context/Carcontext";
function Overlay() {
  const cardCtx = useContext(carContext);
  return <div className={classes.overlay} onClick={cardCtx.handleClick}></div>;
}

export default Overlay;
