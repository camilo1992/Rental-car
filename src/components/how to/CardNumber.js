import classes from "./CardNumber.module.css";

const CardNumber = (props) => {
  return (
    <div
      className={classes.option}
      style={{ backgroundImage: `url(${props.back})` }}
    >
      <div
        className={classes.numberContainer}
        style={{ backgroundImage: `url(${props.number})` }}
      ></div>
      <p>{props.description}</p>
    </div>
  );
};

export default CardNumber;
