import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Features.module.css";
function Features() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Recent Works</h1>
      <div className={styles.mainDiv}>
        <div className={styles.contentDiv}>
          <img className={styles.cardImg} src="/feature.png" alt="ecellImg" />
          <h1 className={styles.title}>Ecell Website</h1>

          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
        <div className={styles.contentDiv}>
          <img className={styles.cardImg} src="/feature.png" alt="ecellImg" />
          <h1 className={styles.title}>Ecell Website</h1>

          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
        <div className={styles.contentDiv}>
          <img className={styles.cardImg} src="/feature.png" alt="ecellImg" />
          <h1 className={styles.title}>Ecell Website</h1>

          <p className={styles.contentDetails}>
            This is the website i created for Ecell(RGIT). this Website is built
            on ReactJS , Styled components and some other styling libraries
          </p>
          <Button className={styles.detailsBtn}>More Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Features;
