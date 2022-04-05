import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div id={classes.foot}>
        <h3>We are here</h3>
        <p>
          Av. Anta 1890, Zarate. Buenos Aires Province. Phone: +54-93487-12-45.
          Email: info@romerosrentalcar.com
        </p>
      </div>
      <div id={classes.foot}>
        <div className={classes.image} />
      </div>

      <div id={classes.foot}>
        <div className={classes.social}>
          <div className={classes.imagen1}></div>
          <h4>RomerosRentalCars</h4>
          <div className={classes.imagen2}></div>
          <h4>@RomerosRentalCars</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// https://carros.tucarro.com.co/
