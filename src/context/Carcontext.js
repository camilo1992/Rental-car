import React, { useState } from "react";

export const carContext = React.createContext({
  isClicked: false,
  handleClick: () => {},
  car: {
    key: null,
    description: null,
    img: null,
    model: null,
    priceDay: null,
    license: null,
    colour: null,
    days: null,
    mode: null,
    totalPrice: "Price is not available yet",
  },
  //   isSuscribed: false,
});

const initialCarDetails = {
  key: null,
  description: null,
  img: null,
  model: null,
  priceDay: null,
  license: null,
  colour: null,
  days: null,
  mode: null,
  totalPrice: "Price is not available yet",
};

const CarContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [car, setCar] = useState(initialCarDetails);

  const onClick = (carCard) => {
    if (!carCard.colour) {
      setIsClicked(!isClicked);
    }

    if (!isClicked || carCard.colour) {
      setCar((prev) => {
        return { ...prev, ...carCard };
      });
    }
  };

  return (
    <carContext.Provider
      value={{ isClicked: isClicked, handleClick: onClick, car: car }}
    >
      {props.children}
    </carContext.Provider>
  );
};

export default CarContextProvider;
