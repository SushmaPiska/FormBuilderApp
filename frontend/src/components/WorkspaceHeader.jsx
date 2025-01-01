import React from 'react'
import styles from './WorkspaceHeader.module.css'
import ToggleTheme from './ToggleTheme';
import closeIcon from '../assets/closeIcon.png'
import { useNavigate } from 'react-router-dom';
function WorkspaceHeader() {
  const navigate=useNavigate()
  const handleSave=()=>{
    navigate('/form')
  }
  return (
    <div className={styles.container}>
        <input type="text" placeholder='Enter Form Name' className={styles.formInput}/>
        <div className={styles.options}>
        <p className={`${styles.showFlowBtn} ${styles.active}`}>Flow</p>
        <p className={styles.showResponseBtn}>Response</p>
        </div>
        
        <ToggleTheme/>
        <button className={styles.shareBtn}>Share</button>
        <button className={styles.saveBtn} onClick={handleSave}>Save</button>
        <img src={closeIcon} alt="" className={styles.closeIcon}/>
    </div>
  )
}

export default WorkspaceHeader