import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
function footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainDiv}>
        <img
          className={styles.footerImg}
          src="./images/footerleft.svg"
          alt=""
        />
        <div className={styles.socials}>
          <h1 className={styles.socialHeading}>Follow Us</h1>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/krishay-nair-667313233/"
          >
            <img
              className={styles.socialLogo}
              src="/linkedin.png"
              alt="linkedin logo"
            />
          </Link>
          <Link target="_blank" href="https://github.com/KrishayNair">
            <img
              className={styles.socialLogo}
              src="/gitHub.png"
              alt="GitHub logo"
            />
          </Link>
          <Link href="mailto:krishay958@gmail.com">
            <img
              className={styles.socialLogo}
              src="/gmail.png"
              alt="Gmail logo"
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/krishay_nair/">
            <img
              className={styles.socialLogo}
              src="/instagram.png"
              alt="Instagram logo"
            />
          </Link>
        </div>
        <img
          className={styles.footerImg}
          src="./images/footerright.svg"
          alt=""
        />
      </div>
      <h1 className={styles.heading}>
        Designed and created by HackstreetBoyssss
      </h1>
    </div>
  );
}

export default footer;
