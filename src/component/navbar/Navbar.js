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
          {!hide ? (
            <>
              <a href="https://app.chainwhiz.app">
                <li className={classes.main_nav__list}>Launch App</li>
              </a>
              <a href="https://chainwhiz.substack.com/">
                <li className={classes.main_nav__list}>Newsletter</li>
              </a>
              <a href="https://medium.com/articles-more-every-week">
                <li className={classes.main_nav__list}>Articles</li>
              </a>
              <a href="https://www.chainwhiz.app/Disclaimer.pdf">
                <li className={classes.main_nav__list}>Disclaimer</li>
              </a>
            </>
          ) : null}
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
