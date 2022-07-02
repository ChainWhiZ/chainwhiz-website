import React, { useState } from "react";
import classes from "./SideBarStyle.module.css"
const SideMenu = ({show}) => {
    return(
        <>
        <div className={!show? `${classes.sidebar_main} ${classes.show}`:`${classes.sidebar_main}`}>
            <ul className={classes.sidebar__lists}>
            <li className={classes.sidebar__list}>
              <a href="https://app.chainwhiz.app">Launch App</a>
            </li>
            <li className={classes.sidebar__list}>
              <a href="https://chainwhiz.substack.com/">Newsletter </a>
            </li>

            <li className={classes.sidebar__list}>
              <a href="https://medium.com/articles-more-every-week">Articles</a>
            </li>

            <li className={classes.sidebar__list}>
              <a href="https://www.chainwhiz.app/Disclaimer.pdf">Disclaimer </a>
            </li>
            </ul>
        </div>
        </>
    )
}

export default SideMenu