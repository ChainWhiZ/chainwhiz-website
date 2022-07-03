import React,{useState} from "react";
const Divider = ({classes}) => {
  const [emoji, setEmoji] = useState("📓");
  return (
  <div className={classes.divider_main}>
      <p className={classes.divider_main__icon} onMouseEnter={()=>{setEmoji("💻")}}>{emoji}</p>
      <p className={classes.divider_main__content}>Post a bounty on Chainwhiz and work with leading Web3 talent </p>
      <button className={classes.divider_main__button}>Get Started</button>
  </div>
  );
};

export default Divider;