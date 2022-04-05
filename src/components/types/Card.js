import classes from "./Card.module.css";
import Button from "./Button";
const Card = (props) => {
  return (
    <div
      className={classes.main}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className={classes.content}>
        <h1>{props.title}</h1>
        <Button>See more</Button>
      </div>
    </div>
  );
};

export default Card;
