import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Trade.module.css";
function Trade() {
  return (
    <div className={styles.main}>
      <img className={styles.imgTrade} src="./bitcoin12.png"></img>
      <h1 className={styles.heading}>
        <span className={styles.color}>Trade</span> anything. No registration,
        no <span className={styles.color}>hassle.</span>
      </h1>

      <p className={styles.para}>
        Trade any token on BNB Smart Chain in seconds, just by connecting your
        wallet.
      </p>
      <Button className={styles.detailsBtn}> Trade now</Button>
    </div>
  );
}

export default Trade;
