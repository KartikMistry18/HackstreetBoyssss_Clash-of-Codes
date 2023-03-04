import React from "react";
import styles from "./navbar.module.css";
import Button from "react-bootstrap/Button";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
function navbar() {
  return (
    <div className={styles.headerContainer}>
      <h1 className="header-logo">Defi</h1>
      {/* <nav className={styles.navMid}>
        <ul>
          <Link className={`${styles.navElement} ${styles.onHover}`} href="/">
            Home
          </Link>
          <Link className={styles.navElement} href="/">
            About
          </Link>
          <Link className={styles.navElement} href="/">
            Projects
          </Link>
          <Link className={styles.navElement} href="/contactUs">
            Contact
          </Link>
        </ul>
      </nav> */}
       <ConnectWallet  accentColor='white' colorMode='light' />
    </div>
  );
}

export default navbar;
