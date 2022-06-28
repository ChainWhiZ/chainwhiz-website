import React from "react";
import classes from "./BusinessStyle.module.css";
import RightSection from "./RightSection";
import Divider from "./Divider";
const Business = () => {
  return (
    <>
      <div className={classes.left_main_div}>
        <img src="./chainwhiz-assests/business-assests/person2.jpeg" />
      </div>
      <RightSection classes={classes}/>
      <Divider classes={classes}/>
    </>
  );
};

export default Business;
