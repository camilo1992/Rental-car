import classes from "./Profile.module.css";

function Profile() {
  return (
    <div id="profilePage">
      <div className={classes.profileContainer}>
        <div className={classes.picutureContainer}>
          <div className={classes.picuture}></div>
        </div>
        <div lassName={classes.contentContainer}>
          <div lassName={classes.content}></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
