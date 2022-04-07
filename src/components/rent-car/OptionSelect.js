// rfce
import React from "react";
import classes from "./OptionSelect.module.css";

function OptionSelect(props) {
  return (
    <div className={classes.optionCar}>
      <label htmlFor="car-select">{props.title}</label>
      <select onChange={props.onSelect} id={props.title}>
        <option>Please choose a {props.title}--</option>
        <option value={props.value}>{props.value}</option>
        <option value={props.value1}>{props.value1}</option>
        <option value={props.value2}>{props.value2}</option>
        <option value={props.value3}>{props.value3}</option>
      </select>
    </div>
  );
}

export default OptionSelect;
