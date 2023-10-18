import React from "react";
import mealsimg from "../assets/meals1.jpg";
import classes from "./Header.module.css"; // Use "styles" to import the CSS module
import HeaderCartButton from "./HeaderCartButton";
import videoClip from "../assets/food1.mp4";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes.videoContainer}>
        <video loop muted autoPlay id="video-background">
          <source src={videoClip} type="video/mp4" />
        </video>
      </div>
    </React.Fragment>
  );
};

export default Header;
