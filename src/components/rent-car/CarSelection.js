import React from "react";
import classes from "./CarSelection.module.css";
import Carcard from "./Carcard";
import { Fragment } from "react/cjs/react.production.min";
import { useContext } from "react";
import { carContext } from "../../context/Carcontext";

//  we handle click here using useContext
// update global state

const DUMMY_DATA = [
  {
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    description: "aaaaaaaa",
    key: "1234",
  },
  {
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    description: "bbbbbbb",
    key: "xxx",
  },
  {
    img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    description: "cccccc",
    key: "yyy",
  },
];

function CarSelection(props) {
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
            })}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default CarSelection;
