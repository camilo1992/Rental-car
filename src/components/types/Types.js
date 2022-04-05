import Card from "./Card";
import classes from "./Types.module.css";
import sporty from "../assets/mountain.avif";
import trunk from "../assets/trunk.jpg";
import girl from "../assets/first.jpg";
import family from "../assets/fam.jpg";
const Types = () => {
  return (
    <div id="car-section">
      <section>
        <h3>Get ready ... pick the car that suits your needs !</h3>
        <div className={classes.Card}>
          <Card title="Go Sporty" img={sporty}></Card>
          <Card title="More lodge room" img={trunk}></Card>
          <Card title="Travel Economy" img={girl}></Card>
          <Card title="Share with Family" img={family}></Card>
        </div>
      </section>
    </div>
  );
};

export default Types;
