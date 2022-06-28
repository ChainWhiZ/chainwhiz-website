import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./PartnersStyle.module.css";
import CaraouselCards from "./CarouselCard";
import partnersList from "../../constats/partners.json";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Partners = () => {
  return (
    <>
      <div className={classes.partners_main}>
        <div className={classes.partners_header}>
          <p>
            Our <span className={classes.highlighted}>Partners</span>
          </p>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true}>
          {partnersList.map((element, id) => {
            return (
              <div key={id}>
                <CaraouselCards classes={classes} data={element} />{" "}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Partners;
