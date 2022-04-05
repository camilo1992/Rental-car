import React, { useState } from "react";

export const carContext = React.createContext({
  isClicked: false,
  handleClick: () => {},
  car: {},
  //   isSuscribed: false,
});

const CarContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [car, setCar] = useState(null);

  const onClick = (carCard) => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      setCar({ ...carCard });
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
