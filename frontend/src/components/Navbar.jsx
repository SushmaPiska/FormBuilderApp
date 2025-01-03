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
  return (
    <div className={styles.header}>
        <select className={styles.chooseBox}>
          <option value="workspace" defaultChecked>
            Sushma Piska's workspace
          </option>
          <option value="settings" onClick={handleSettings}>
            Settings
          </option>
          <option value="logout" className={styles.logout}>Log Out</option>
        </select>
        <button onClick={handleSettings}>settings</button>
        <div className={styles.toggleTheme}  >
          <ToggleTheme toggleTheme={toggleTheme}/>
        </div>
        <button className={styles.shareBtn} onClick={handleShare}>Share</button>
      </div>
  )
}

export default Navbar