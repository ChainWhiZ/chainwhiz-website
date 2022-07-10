import React, { useState } from "react";
const Divider = ({ classes }) => {
  const [emoji, setEmoji] = useState("👷");
  return (
    <div className={classes.divider_main}>
      <p
        className={classes.divider_main__icon}
        onMouseEnter={() => {
          setEmoji("🧑‍💻");
        }}
      >
        {emoji}
      </p>
      <p className={classes.divider_main__content}>
        Instantly start earning crypto by discovering amazing bounties.
      </p>
      <a href="https://www.app.chainwhiz.app/">
        <button className={classes.divider_main__button}>Get Started</button>
      </a>
    </div>
  );
};

export default Divider;
