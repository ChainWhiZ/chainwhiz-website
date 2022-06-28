import React from "react";

const LeftSection = ({classes}) => {
  return (
    <>
      <div className={classes.token_left_section}>
        <div className={classes.token_left_section_image__cont}>
          <img
            className={classes.token_left_section_image}
            src="./chainwhiz-assests/token-assests/matic.png"
          />
        </div>
        <div className={classes.token_left_section_header}>
          <p className={classes.token_left_section_header__content}>
            Native Currency
          </p>
        </div>
        <div className={classes.token_left_section_description}>
          <p className={classes.token_left_section_description__content}>
            Bounty amounts, and community rewards are paid out in the form of
            MATIC tokens
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSection