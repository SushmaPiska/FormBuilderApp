import React from "react";
import styles from "./ToggleTheme.module.css";
function ToggleTheme() {
  return (
    <div className={styles.toggleTheme}>
      <p>Light</p>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <p>Dark</p>
    </div>
  );
}

export default ToggleTheme;
