import React, { cloneElement } from "react";
import classes from "./TokenStyle.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
const Token = () => {
  return (
    <>
      <div className={classes.token_main}>
        <div className={classes.token_main_header}>
          <p className={classes.token_main_header__content}>
            ERC-20 Tokens, Assemble!
          </p>
        </div>
        <LeftSection classes={classes} />
        <RightSection classes={classes} />
      </div>
    </>
  );
};

export default Token;
