import React from "react";
import classes from "./NewsletterStyle.module.css";

const Newsletter = () => {
  return (
    <>
      <div className={classes.newsletter_main}>
        <div className={classes.newsletter_header}>
          <p className={classes.newsletter_header__content}>
            Weekly Newsletter
          </p>
        </div>
        <div className={classes.newsletter_left_section}>
          <div className={classes.newsletter_left_section__description}>
            <p className={classes.newsletter_left_section__description_content}>
              Can’t wait to buidl? <br className={classes.break} />Get Notified about <br className={classes.break}/>the latest bounties and
              platform updates.
            </p>
          </div>
          <div className={classes.newsletter_left_section__header}>
            <a href="https://chainwhiz.substack.com/"><p className={classes.newsletter_left_section__header_content}>
              Subscribe Now
            </p></a>
            <p className={classes.newsletter_left_section__header_emoji}> 👈</p>
          </div>
          <div className={classes.newsletter_left_section__footer}>
            <p className={classes.newsletter_left_section__footer_content}>
              We also share updates about our product, contests and giveaways.
            </p>
          </div>
        </div>
        <div className={classes.newsletter_right_section}>
          <img src="./chainwhiz-assests/newsletter-assests/newsletter_gif.gif" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
