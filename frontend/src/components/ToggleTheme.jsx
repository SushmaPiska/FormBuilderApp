import React from "react";
import styles from "./ToggleTheme.module.css";
function ToggleTheme({ toggleTheme }) {

  return (
    <div className={styles.toggleTheme}>
      <p>Dark</p>
      <label className={styles.switch}  >
        <input type="checkbox" onChange={toggleTheme} 
        
        />
        <span
          className={`${styles.slider} ${styles.round}`}
        ></span>
      </label>
      <p>Light</p>
    </div>
  );
}

export default ToggleTheme;
