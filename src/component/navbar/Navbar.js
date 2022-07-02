import React, { useState } from "react";
import classes from "./NavbarStyle.module.css";
import SideMenu from "./SideBar";
const Navbar = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className={classes.main_header}>
        <div className={classes.main_header__icon}>
          <img src="./chainwhiz-assests/logo.svg" />
        </div>
        <div className={classes.main_nav__ham}>
          <p
            onClick={() => {
              setHide(!hide);
            }}
          >
            &#8801;
          </p>
        </div>
        {!hide ? <SideMenu show={hide}/> : null}
        <ul className={classes.main_nav__lists}>
          <li className={classes.main_nav__list}></li>
          <>
            <li className={classes.main_nav__list}>
              <a href="https://app.chainwhiz.app">Launch App</a>
            </li>
            <li className={classes.main_nav__list}>
              <a href="https://chainwhiz.substack.com/">Newsletter </a>
            </li>

            <li className={classes.main_nav__list}>
              <a href="https://medium.com/articles-more-every-week">Articles</a>
            </li>

            <li className={classes.main_nav__list}>
              <a href="https://www.chainwhiz.app/Disclaimer.pdf">Disclaimer </a>
            </li>
          </>
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
