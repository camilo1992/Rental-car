import { Fragment } from "react/cjs/react.production.min";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className="contact">
      <div className={classes.contact}>
        <h3>Contact us</h3>
      </div>
      <form className={classes.form}>
        <div className={classes.names}>
          <div>
            <input id={classes.input} type="text" placeholder="Name" />
          </div>
          <div>
            <input id={classes.input} type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className={classes.email}>
          <input id={classes.input} type="email" placeholder="E-mail" />
        </div>

        <div className={classes.vehicle}>
          <div className={classes.number}>
            <input
              id={classes.input}
              type="number"
              placeholder="
              Phone number"
            />
          </div>
          <div className={classes.number}>
            <input id={classes.input} type="text" placeholder="Vehicle" />
          </div>
        </div>
        <div>
          <button>Let’s get in touch!</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
