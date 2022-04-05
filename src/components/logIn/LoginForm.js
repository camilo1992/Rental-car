import Overlay from "../popup/Overlay";
import Button from "../types/Button";
import classes from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div id="login-form">
      <Overlay />
      <div className={classes.loginFormContainer}>
        <form className={classes}>
          <h3> Log in</h3>
          <div>
            <input id={classes.input} type="email" placeholder="e-mail"></input>
          </div>
          <div>
            <input
              id={classes.input}
              type="password"
              placeholder="password"
            ></input>
          </div>
          <p> Forgot password?</p>
          <div className={classes.buttonLog}>
            <Button>ok</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
