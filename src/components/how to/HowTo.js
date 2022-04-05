import classes from "./HowTo.module.css";
import CardNumber from "./CardNumber";

import car from "../assets/amarok.png";
import form from "../assets/form.png";
import contact from "../assets/contact.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

const HowTo = () => {
  return (
    <section className={classes.section2}>
      <h3>How do i do it? 🤔</h3>
      <div className={classes.optionContainer}>
        <CardNumber
          back={contact}
          number={one}
          description="Log in or sign in for a new account. It's easy."
        />
        <CardNumber
          back={car}
          number={two}
          description="Think about any car you want. we have it 😏"
        />
        <CardNumber
          back={form}
          number={three}
          description="Leave us your inf ! we'll contact you."
        />
      </div>
    </section>
  );
};

export default HowTo;
