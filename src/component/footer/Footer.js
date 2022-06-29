import React from "react";
import classes from "./FooterStyle.module.css";
import leftSectionLinks from "../../constats/footerLeftLinks.json";
import rightSectionLinks from "../../constats/footerRightLinks.json";
const Footer = () => {
  return (
    <>
      <hr></hr>
      <div className={classes.footer_section}>
        <div className={classes.left_section}>
          <div className={classes.left_section_icon}>
          <img src="./chainwhiz-assests/logo.svg" />
          </div>
          <div className={classes.left_section_description}>
            <p className={classes.left_section_description_content}>
              Chainwhiz is an open-source and decentralised marketplace with
              zero platform fees.
            </p>

            <p className={classes.left_section_description_content}>
              Our mission is to build a platform for transparent open source and
              community-centric dapp development
            </p>
          </div>
        </div>
        <div className={classes.middle_section}>
          <div className={classes.middle_section_left_segment}>
            {leftSectionLinks.map(({ title, link }, id) => {
              return link ? (
                <a href={link}>
                  <p
                    className={classes.middle_section_left_segment__content}
                    key={id}
                  >
                    {title}
                  </p>
                </a>
              ) : (
                <p
                  className={`${classes.middle_section_left_segment__content} ${classes.disabled}`}
                  key={id}
                >
                  {title}
                </p>
              );
            })}
          </div>
          <div className={classes.middle_section_right_segment}>
            {rightSectionLinks.map(({ title, link }, id) => {
              return link ? (
                <a href={link}>
                  <p
                    className={classes.middle_section_right_segment__content}
                    key={id}
                  >
                    {title}
                  </p>
                </a>
              ) : (
                <p
                  className={`${classes.middle_section_right_segment__content} ${classes.disabled}`}
                  key={id}
                >
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <div className={classes.right_section}>
          <div className={classes.right_section_upper}>
            <img src="./chainwhiz-assests/footer-assests/footer.png" />
          </div>
          <div className={classes.right_section_lower}>
            <a href="https://twitter.com/chainwhiz">
              <img src="./chainwhiz-assests/footer-assests/twitter.png" />
            </a>
            <a href="https://discord.com/invite/NjxUxWAfuz">
              <img src="./chainwhiz-assests/footer-assests/discord.png" />
            </a>
            <a href="https://t.me/joinchat/wNfMm0mKzlBiNGNl">
              <img src="./chainwhiz-assests/footer-assests/telegram.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
