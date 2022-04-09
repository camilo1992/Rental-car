import classes from "./RentCar.module.css";
import OptionSelect from "./OptionSelect";
import CarSelection from "./CarSelection";
import PopupCar from "../popup/PopupCar";
import { useContext, useEffect, useReducer } from "react";
import { carContext } from "../../context/Carcontext";

const carDetailsReducer = (currentDetails, action) => {
  switch (action.type) {
    case "COLOUR":
      return { ...currentDetails, colour: action.colour };
    case "DAYS":
      return { ...currentDetails, days: action.days };
    case "MODE":
      return { ...currentDetails, mode: action.mode };
  }
};

const initialDetails = {
  colour: "select Colour Please",
  days: "select days Please",
  mode: "select mode Please",
};

function RentCar() {
  const carCtx = useContext(carContext);
  const { handleClick } = carCtx;
  const [carDetails, dispatch] = useReducer(carDetailsReducer, initialDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    handleClick(carDetails);
  }, [carDetails]);

  const selectHandler = (e) => {
    if (e.target.id === "Colour") {
      dispatch({ type: "COLOUR", colour: e.target.value });
    }
    if (e.target.id === "Days") {
      dispatch({ type: "DAYS", days: e.target.value });
    }
    if (e.target.id === "type of car") {
      dispatch({ type: "MODE", mode: e.target.value });
    }
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
          title="type of car"
          onSelect={selectHandler}
        />
      </div>
      <CarSelection />
      {carCtx.isClicked && <PopupCar />}
    </div>
  );
}

export default RentCar;
