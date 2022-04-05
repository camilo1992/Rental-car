import classes from "./RentCar.module.css";
import OptionSelect from "./OptionSelect";
import CarSelection from "./CarSelection";
import PopupCar from "../popup/PopupCar";
import { useContext, useEffect } from "react";
import { carContext } from "../../context/Carcontext";
function RentCar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const carCtx = useContext(carContext);
  return (
    <div id="section-rent">
      <img />
      <div className={classes.searchBar}>
        <OptionSelect
          value1="Blue"
          value2="Gray"
          value3="Brown"
          value4="Green"
          title="Colour"
        />
        <OptionSelect
          value1="1"
          value2="2"
          value3="3"
          value4="4"
          title="Date"
        />
        <OptionSelect
          value1="Electric"
          value2="Gas fueled"
          title="Type of car"
        />
      </div>
      <CarSelection />
      {carCtx.isClicked && <PopupCar />}
    </div>
  );
}

export default RentCar;
