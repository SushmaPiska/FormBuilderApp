import React from "react";
import styles from "./ToggleTheme.module.css";
function ToggleTheme({ toggleTheme }) {

  return (
    <div className={styles.toggleTheme}>
      <p>Light</p>
      <label className={styles.switch}  >
        <input type="checkbox" />
        <span
          className={`${styles.slider} ${styles.round}`}
          onClick={toggleTheme}
        ></span>
      </label>
      <p>Dark</p>
    </div>
  );
}

export default ToggleTheme;
