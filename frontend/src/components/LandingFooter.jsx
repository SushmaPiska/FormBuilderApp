import React from "react";
import styles from "./LandingFooter.module.css";
import TitleLogo from "./TitleLogo";
import openIcon from "../assets/openIcon.png";
function LandingFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.head}>
          <TitleLogo />
        </div>
        <p>Made with ❤️ by </p>
        <p><u>@cuvette</u></p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listHead}>Product</li>
        <li>
          <u>Status</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>Documentation</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>Roadmap</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>Pricing</u> 
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.listHead}>Community</li>
        <li>
          <u>Discord</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>GitHub repository</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>Twitter</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>LinkedIn</u> <img src={openIcon} alt="" />
        </li>
        <li>
          <u>OSS Friends</u> 
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.listHead}>Company</li>
        <li>
          <u>About</u>
        </li>
        <li>
        <u>Contact</u>
        </li>
        <li>
        <u>Terms of Service</u>
        </li>
        <li>
        <u>Privacy Policy</u>
        </li>
      </ul>
    </div>
  );
}

export default LandingFooter;
