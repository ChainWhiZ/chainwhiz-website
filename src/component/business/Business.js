import React from "react";
import classes from "./BusinessStyle.module.css";
import RightSection from "./RightSection";
import Divider from "./Divider";
const Business = () => {
  return (
    <>
      <div className={classes.business_main_div}>
        <div className={classes.left_main_div}>
          <img src="./chainwhiz-assests/business-assests/globe.png" />
        </div>
        <RightSection classes={classes} />
        <Divider classes={classes} />
      </div>
    </>
  );
};

export default Business;
