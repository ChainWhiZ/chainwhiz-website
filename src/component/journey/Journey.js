import React from "react";
import classes from "./JourneyStyle.module.css";

const Journey = () => {
  return (
    <>
      <div className={classes.journey_main}>
        <div className={classes.journey_upper_section}>
          <div className={classes.journey_upper_header}>
            <p className={classes.journey_upper_header__content}>
              Let’s do this!
            </p>
          </div>
          <div className={classes.journey_upper_description}>
            <p className={classes.journey_upper_description__content}>
              Some ideas are born in the garage. Some in skyscapers. Ours
              started in a hackathon.
            </p>
          </div>
          <div className={classes.journey_upper_button__cont}>
            <button>Read our newsletter</button>
            <button>Explore the marketplace</button>
            <button>Community Voting</button>
          </div>
          <div className={classes.journey_upper_footnote}>
              <p>Take the cake walk. Become an early user.</p>
          </div>
        </div>
        <div className={classes.journey_down_section}>
           <p>Related Links:</p>
           <p>How to connect Metamask to Polygon</p>
           <p>Install Metamask</p>
           <p>Our Roadmap</p>
        </div>
        <hr className={classes.bar}></hr>
      </div>
    </>
  );
};

export default Journey;
