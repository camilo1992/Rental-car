import classes from "./MainNavigation.module.css";
import { Link } from "react-scroll/modules";
import { useHistory } from "react-router-dom";
import HomeButton from "./HomeButton ";
import { useEffect, useState } from "react";
const MainNavigation = (props) => {
  const route = useHistory();

  const [active, setActive] = useState(null);
  useEffect(() => {
    if (route.location.pathname === "/rent-car") {
      setActive(true);
      console.log("useEffect");
    }
  }, [route.location.pathname]);

  const onShowRent = (e) => {
    e.preventDefault();
    route.push("/rent-car");
  };

  console.log("render");

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Romero's rental car</div>
      <nav>
        <ul>
          <HomeButton />
          <li className={active && classes.hide}>
            <Link to="car-section" smooth={true}>
              Cars
            </Link>
          </li>
          <li className={active && classes.hide}>
            <a onClick={onShowRent}>Rent a car</a>
          </li>
          <li className={active && classes.hide}>
            <Link to="question-section" smooth={true}>
              F.A.Q
            </Link>
          </li>
          <li className={active && classes.hide}>
            <Link to="contact" smooth={true}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={classes.access && active && classes.hide}>
        <li>Log in</li>
        <p>/</p>
        <li>Register</li>
      </ul>
    </header>
  );
};
// https://v5.reactrouter.com/web/guides/scroll-restoration
export default MainNavigation;
