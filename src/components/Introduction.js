import classes from "./Introduction.module.css";
import { Fragment } from "react/cjs/react.production.min";

const Introduction = () => {
  return (
    <div id="section-introduction">
      <div id={classes.section}>
        <div className={classes.main}>
          <div className={classes.intro}>
            <h1>ALWAYS THE RIGHT VEHICLE!</h1>
            <p>
              With our fleet of new models, you will always find the perfect
              vehicle for your needs. Whether it‘s a small car for a city trip,
              a 4x4 for an extreme getaway or spacious car for a family trip, we
              have it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
