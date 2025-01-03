import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom";
import ToggleTheme from './ToggleTheme';
function Navbar({setIsSharePopup, toggleTheme}) {
    const navigate = useNavigate();
      const handleSettings = () => {
        navigate("/settings");
      };
    const handleShare=()=>{
      setIsSharePopup(true)
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const userName = storedUser && storedUser.name ? storedUser.name : "Guest";

  return (
    <div className={styles.header}>
        <select className={styles.chooseBox}>
          <option value="workspace" defaultChecked>
            {userName}'s workspace
          </option>
          <option value="settings" onClick={handleSettings}>
            Settings
          </option>
          <option value="logout" className={styles.logout}>Log Out</option>
        </select>
        <button className={styles.settingsBtn} onClick={handleSettings}>settings</button>
        <div className={styles.toggleTheme}  >
          <ToggleTheme toggleTheme={toggleTheme}/>
        </div>
        <button className={styles.shareBtn} onClick={handleShare}>Share</button>
      </div>
  )
}

export default Navbar