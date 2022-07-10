import React from "react";
const LeftSection = ({classes}) => {
  return (
    <>
      <div className={classes.left_main_div}>
        <div className={classes.left_main_div__header}>
          <p className={classes.left_main_div__header_uper}>
          A bounty marketplace for Web3 Protocols, builders, and communities.
          </p>
          <p className={classes.left_main_div__header_lower}>
          Now on Polygon!
          </p>
          </div>
          <ul className={classes.left_main_div__elements}>
              <li className={classes.left_main_div__element}>Host bounties from all domains.</li>
              <li className={classes.left_main_div__element}>Contribute to bounties and get paid. </li>
              <li className={classes.left_main_div__element}>Participate in solution validations by voting.</li>
          </ul>
          <div className={classes.left_main_div__buttons}>
              <a href="https://www.app.chainwhiz.app/"><button className={classes.left_main_div__button}>Explore Chainwhiz</button></a>
              <a href="https://youtu.be/LEEmFvCBqoc"><button className={`${classes.left_main_div__button} ${classes.highlighted}`}>How to use Chainwhiz</button></a>
          </div>
      </div>
    </>
  );
};

export default LeftSection;
