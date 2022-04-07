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

  const selectHandler = (e) => {
    console.log(e);
    console.log(e.target.id); // id filter the value we are receiving
    console.log(e.target.value);
    // useReducer can keep the state updated and then store it in the global context
  };

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
          onSelect={selectHandler}
        />
        <OptionSelect
          value1="1"
          value2="2"
          value3="3"
          value4="4"
          title="Days"
          onSelect={selectHandler}
        />
        <OptionSelect
          value1="Electric"
          value2="Gas fueled"
          title="Type of car"
          onSelect={selectHandler}
        />
      </div>
      <CarSelection />
      {carCtx.isClicked && <PopupCar />}
    </div>
  );
}

export default RentCar;
