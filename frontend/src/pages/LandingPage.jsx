import React from "react";
import styles from "./LandingPage.module.css";
import logo from "../assets/logo.png";
import landingPage from "../assets/landingPage.png";
import landingFigure from "../assets/landingFigure.png";
import triShape from "../assets/triShape.png";
import semicircleShape from "../assets/semicircleShape.png";
import LandingFooter from "../components/LandingFooter";
import TitleLogo from "../components/TitleLogo";

import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate('/login')
        // navigate("/dashboard");
    }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.head}>
          <TitleLogo/>
        </div>
        <button className={styles.signinBtn} onClick={handleLogin}>Sign in</button>
        <button className={styles.createBtn}  onClick={handleLogin}>Create a FormBot</button>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyHead}>
          <img src={triShape} alt="" />
          <div className={styles.content}>
            <h1 className={styles.bodyTitle}>
              Build advanced chatbots visually
            </h1>
            <p className={styles.contentIn}>
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </p>
            <button className={`${styles.createBtn } ${styles.marginTop}` } onClick={handleLogin}>
              Create a formBot for free
            </button>
          </div>
          <img src={semicircleShape} alt="" />
        </div>
        <img src={landingFigure} alt="" />
      </div>
      <LandingFooter/>
    </div>
  );
}

export default LandingPage;
