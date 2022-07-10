import React from "react";
const RightSection = ({ classes }) => {
  return (
    <>
      <div className={classes.right_main_div}>
        <div className={classes.right_main_div__header}>
          <p className={classes.right_main_div__header_content}>
            Connecting <span>Protocols</span> and <span>DAOs </span> with{" "}
            <span>builders.</span>
          </p>
        </div>
        <ul className={classes.right_main_div__elements}>
          <li className={classes.right_main_div__element}>
            Host bounties from fields of design, development, marketing, etc.
          </li>
          <li className={classes.right_main_div__element}>
            Permissioned, Standard, Upskilling - We support hosting all types of
            bounties.{" "}
          </li>
          <li className={classes.right_main_div__element}>
            Let your community decide what is best with the power of solution
            voting.
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

export default RightSection;
