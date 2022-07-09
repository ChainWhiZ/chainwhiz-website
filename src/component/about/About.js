import React from "react";
import classes from "./AboutStyle.module.css";
import LeftSection from "./LeftSection";
import Divider from "./Divider";
const About = () => {
  return (
    <>
    <div className={classes.about_main}>
    <LeftSection classes={classes}/>
    <div className={classes.right_main_div}>
      <img src="./chainwhiz-assests/about-assests/man_opt.png" />
    </div>
    <Divider classes={classes}/>
    </div>
    </>
  );
};

export default About;
