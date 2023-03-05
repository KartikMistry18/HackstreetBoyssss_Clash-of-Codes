import React from "react";
import styles from "./hero.module.css";
import Button from "react-bootstrap/Button";
import Features from "./Features";
function Hero() {
  return (
    <div className={styles.main}>
      <img className={styles.bgImg} src="/heroImg.svg" />
      <h1 className={styles.heading}>
        "The Decentralized Way to manage your Finances"
      </h1>
      <Button className={styles.detailsBtn}>Trade now</Button>
      <Button className={styles.detailsBtn}>Swap now</Button>
      <Features />
    </div>
  );
}

export default Hero;
