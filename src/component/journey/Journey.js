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
            <a href="https://chainwhiz.substack.com/"><button>Read our newsletter</button></a>
            <a href="https://app.chainwhiz.app"><button>Explore the marketplace</button></a>
            <a href="https://medium.com/articles-more-every-week/community-voting-defining-the-future-of-public-goods-6054fc2f81b5"><button>Community Voting</button></a>
          </div>
          <div className={classes.journey_upper_footnote}>
              <p>Take the cake walk. Become an early user.</p>
          </div>
        </div>
        <div className={classes.journey_down_section}>
           <p>Related Links:</p>
           <p><a href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/">How to connect Metamask to Polygon</a></p>
           <p><a href="https://metamask.io/">Install Metamask</a></p>
           <p><a href="https://www.chainwhiz.app/Roadmap_2022.pdf">Our Roadmap</a></p>
        </div>
      </div>
      <hr className={classes.bar}></hr>
    </>
  );
};

export default Journey;
