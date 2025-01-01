import React from "react";
import styles from './TitleLogo.module.css'
import logo from "../assets/logo.png";

function TitleLogo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <p className={styles.title}>FormBot</p>
    </div>
  );
}

export default TitleLogo;
