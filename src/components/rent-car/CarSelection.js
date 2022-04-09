import React, { useEffect } from "react";
import classes from "./CarSelection.module.css";
import Carcard from "./Carcard";
import { Fragment } from "react/cjs/react.production.min";
import { useContext } from "react";
import { carContext } from "../../context/Carcontext";
import cars from "./cars.json";

//  we handle click here using useContext
// update global state

const DUMMY_DATA = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1ZPBV_XXiyY1RIom3zXI7KMDuOPMMSm3C",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    description: "Hyundai",
    key: "1111",
    model: "Elantra",
    color: "Plateado",
    priceDay: "120.000",
    license: "BIG-189",
  },

  {
    key: 1112,
    description: "Renault",
    model: "Clio",
    color: "Azul",
    priceDay: 125.0,
    license: "RFX-804",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    key: 1113,
    description: "BMW",
    model: "325I",
    color: "Gris",
    priceDay: 320.0,
    license: "MNS-317",
  },
];

function CarSelection(props) {
  // useEffect(() => {
  //   const fetchCarData = async () => {
  //     const response = await fetch("./cars.json");
  //     const data = await response.json();

  //   };

  // console.log("renderCArd");
  const carCtx = useContext(carContext);

  const onClick = (obj) => {
    carCtx.handleClick(obj);
  };

  return (
    <Fragment>
      <div id="car-selection" className={classes.carContainer}>
        {DUMMY_DATA.map((el) => (
          <Carcard
            key={el.key}
            description={el.description}
            img={el.img}
            onClick={onClick.bind(null, {
              key: el.key,
              description: el.description,
              img: el.img,
              model: el.model,
              priceDay: el.priceDay,
              license: el.license,
              totalPrice:
                el.priceDay * carCtx.car.days
                  ? el.priceDay * carCtx.car.days
                  : " Please select number of days 😀",
            })}
          />
        ))}
      </div>
      <div id="car-selection" className={classes.carContainer}>
        {DUMMY_DATA.map((el) => (
          <Carcard
            key={el.key}
            description={el.description}
            img={el.img}
            onClick={onClick.bind(null, {
              key: el.key,
              description: el.description,
              img: el.img,
              model: el.model,
              priceDay: el.priceDay,
              license: el.license,
              totalPrice:
                el.priceDay * carCtx.car.days
                  ? el.priceDay * carCtx.car.days
                  : " Please select number of days 😀",
            })}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default CarSelection;
