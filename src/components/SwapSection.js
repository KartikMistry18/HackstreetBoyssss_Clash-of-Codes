import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./SwapSection.module.css";
function SwapSection() {
  return (
    <div className={styles.main}>
      <img className={styles.imgTrade} src="./swap1.png"></img>
      <h1 className={styles.heading}>
        Join the <span className={styles.color}>DeFi</span> revolution with{" "}
        <span className={styles.color}>SwapToken</span> at your fingertips
      </h1>

      <p className={styles.para}>
        Swap tokens that you own into Fiat Currency and vice-versa
      </p>
      <Button className={styles.detailsBtn}> Swap now</Button>
    </div>
  );
}

export default SwapSection;
