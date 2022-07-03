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
              <li className={classes.left_main_div__element}>Post issues and dev-oriented jobs as bounties.</li>
              <li className={classes.left_main_div__element}>Solve open source bounties and receive payments. </li>
              <li className={classes.left_main_div__element}>Earn tokens by helping curate the best solution to a bounty.</li>
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
