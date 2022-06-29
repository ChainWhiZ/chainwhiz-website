import React, { useState } from "react";
import classes from "./NavbarStyle.module.css";
const Navbar = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <div className={classes.main_header}>
        <div className={classes.main_header__icon}>
          <img src="./chainwhiz-assests/logo.svg" />
        </div>
        <ul className={classes.main_nav__lists}>
        <li className={classes.main_nav__list}>
            <p
              className={classes.main_nav__ham}
              onClick={() => {
                setHide(!hide);
              }}
            >
              &#8801;
            </p>
          </li>
          {!hide ? (
            <>
              <li className={classes.main_nav__list}>
                <a href="https://app.chainwhiz.app">Launch App</a>
              </li>
              <li className={classes.main_nav__list}>
                <a href="https://chainwhiz.substack.com/">Newsletter </a>
              </li>

              <li className={classes.main_nav__list}>
                <a href="https://medium.com/articles-more-every-week">
                  Articles
                </a>
              </li>

              <li className={classes.main_nav__list}>
                <a href="https://www.chainwhiz.app/Disclaimer.pdf">
                  Disclaimer{" "}
                </a>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div></div>
      <div>
        <hr className={classes.bar}></hr>
      </div>
    </>
  );
};

export default Navbar;
