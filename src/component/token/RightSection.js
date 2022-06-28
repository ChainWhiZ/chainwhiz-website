import React from "react";

const RightSection = ({ classes }) => {
  return (
    <>
      <div className={classes.token_right_section}>
        <div className={classes.token_right_section_image__cont}>
          <img
            className={classes.token_right_section_image}
            src="./chainwhiz-assests/token-assests/V.png"
          />
        </div>
        <div className={classes.token_right_section_header}>
          <p className={classes.token_right_section_header__content}>
            Stake and Vote
          </p>
        </div>
        <div className={classes.token_right_section_description}>
          <p className={classes.token_right_section_description__content}>
            Stake MATIC tokens and vote on the best solutions submitted to a
            bounty.
          </p>
        </div>
      </div>
    </>
  );
};

export default RightSection;
