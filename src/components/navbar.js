import React from "react";
import styles from "./navbar.module.css";

import Button from "react-bootstrap/Button";
import Link from "next/link";
function navbar() {
  const connectWalletHandler = async () => {
    setError("");
    //check if eth wallet exists
    if (typeof window !== undefined && typeof window.ethereum !== undefined) {
      try {
        //request wallet connection
        await window.ethereum.request({ method: "eth_requestAccounts" });
        //create a web3 instance
        const web3 = new Web3(window.ethereum);
        //set web3 instance in react statee
        setWeb3(web3);
        //get list of all accounts
        const accounts = await web3.eth.getAccounts();
        //set account 1 to react state
        setAddress(accounts[0]);
      } catch (e) {
        setError(e.message);
      }
    } else {
      console.alert("PLEASE INSTALL ETH WALLET");
    }
  };
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerlogo}>VaultX</h1>
      <nav className={styles.navMid}>
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
      </nav>
      <button className={styles.connect} onClick={connectWalletHandler}>
        {" "}
        Connect Wallet
      </button>
    </div>
  );
}

export default navbar;
