import React from "react";
const RightSection = ({ classes }) => {
  return (
    <>
      <div className={classes.right_main_div}>
        <div className={classes.right_main_div__header}>
          <p className={classes.right_main_div__header_content}>
            Connecting <span>businesses, project-owners </span> with{" "}
            <span>independent devs.</span>
          </p>
        </div>
        <ul className={classes.right_main_div__elements}>
          <li className={classes.right_main_div__element}>
            Post issues and dev-oriented jobs as bounties.
          </li>
          <li className={classes.right_main_div__element}>
            Solve open source bounties and receive payments.{" "}
          </li>
          <li className={classes.right_main_div__element}>
            Earn tokens by helping curate the best solution to a bounty.
          </li>
        </ul>
        <div className={classes.right_main_div__buttons}>
          <button className={classes.right_main_div__button}>
            What is community voting?
          </button>
          <button
            className={`${classes.right_main_div__button} ${classes.highlighted}`}
          >
            Post a bounty now
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSection
