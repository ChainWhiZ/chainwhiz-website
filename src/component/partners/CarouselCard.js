import React from "react";

const CaraouselCards = ({ classes, data }) => {
  return (
    <div className={classes.carousel_main}>
      <div className={classes.carousel_item}>
        <div className={classes.carousel_item__cover_cont}>
          {data.bannerType == "image" ? (
            <img
              className={classes.carousel_item__cover_img}
              src={data.banner}
            />
          ) : (
            <video  className={classes.carousel_item__cover_img} autoPlay muted loop>
              <source
                src={data.banner}
                type="video/mp4"
              />
            </video>
          )}
        </div>
        <div className={classes.carousel_item__profile_cont}>
          <img
            className={classes.carousel_item__profile_img}
            src={data.image}
          />
        </div>
        <div className={classes.carousel_item__header}>
          <p>{data.name}</p>
        </div>
        <div className={classes.carousel_item__content}>
          <p>{data.description}</p>
        </div>
        <div className={classes.carousel_item__socials}>
          <a href="#" className={classes.carousel_item__social_link}>
          <img src="./chainwhiz-assests/footer-assests/twitter.png" />
          </a>
          <a href="#" className={classes.carousel_item__social_link}>
          <img src="./chainwhiz-assests/footer-assests/discord.png" />
          </a>
          <a href="#" className={classes.carousel_item__social_link}>
          <img src="./chainwhiz-assests/footer-assests/telegram.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaraouselCards;
