// rfce
import React from "react";
import classes from "./OptionSelect.module.css";
function OptionSelect(porps) {
  return (
    <div className={classes.optionCar}>
      <label htmlFor="car-select">{porps.title}</label>
      <select name="pets" id="pet-select">
        <option value="">Please choose a {porps.title}--</option>
        <option value={porps.value}>{porps.value}</option>
        <option value={porps.value1}>{porps.value1}</option>
        <option value={porps.value2}>{porps.value2}</option>
        <option value={porps.value3}>{porps.value3}</option>
      </select>
    </div>
  );
}

export default OptionSelect;
