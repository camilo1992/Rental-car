import classes from "./Questions.module.css";
const Questions = () => {
  return (
    <section id="question-section" className={classes.questionContainer}>
      <h3>Frequently asked questions</h3>
      <div className={classes.content}>
        <div className={classes.imageQ}></div>
        <div>
          <span>What are the requirements for renting a car?</span>
          You must be legally of age and must have a driver’s license according
          to the vehicle you want to rent.
          <p>
            <span> What are the payment methods?</span> We accept cash,
            transfers and credit cards.
          </p>
        </div>
        <div>
          <p>
            <span>What is included in the price?</span> The price includes the
            use of the chosen vehicle for an hour or fraction, also includes a
            accidents insurance which covers material damages of our vehicle. It
            does not include medical insurance or third-party damages.
          </p>
          <p>
            <span>What are the conditions for the fuel?</span> We give the
            vehicle with a full tank. You can fill the tank before returning the
            vehicle or you can pay us the necessary amount to fill the tank when
            you return it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
