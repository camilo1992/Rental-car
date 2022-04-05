import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <MainNavigation onShowRent={props.onShowRent} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
