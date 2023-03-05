import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Features.module.css";
function Features() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <img
            className={styles.cardImg}
            src="/accesibility.png"
            alt="ecellImg"
          />
          <h1 className={styles.title}>Accesibility</h1>

          <p className={styles.contentDetails}>
            DeFi web apps are accessible to anyone with an internet connection,
            regardless of their location or financial status. This means that
            people who are underserved or excluded from traditional financial
            services can participate in DeFi and access a wide range of
            financial products and services.
          </p>
        </div>
        <div className={styles.contentDiv}>
          <img className={styles.cardImg} src="/search.png" alt="ecellImg" />
          <h1 className={styles.title}>Transparency</h1>

          <p className={styles.contentDetails}>
            DeFi web apps are built on a public blockchain network, which means
            that all transactions are visible to anyone on the network. This
            transparency helps to reduce fraud and increase trust in the system.
          </p>
        </div>
        <div className={styles.contentDiv}>
          <img className={styles.cardImg} src="/price.png" alt="ecellImg" />
          <h1 className={styles.title}>Lower costs</h1>

          <p className={styles.contentDetails}>
            DeFi web apps operate on a decentralized network, which means that
            there is no need for intermediaries such as banks or financial
            institutions. This leads to lower transaction costs and fees for
            users. In addition, smart contracts help to automate processes,
            which reduces the need for human intervention and lowers operational
            costs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
