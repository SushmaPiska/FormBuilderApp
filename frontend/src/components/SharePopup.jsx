import React from 'react'
import styles from './SharePopup.module.css';
import closeIcon from '../assets/closeIcon.png'
function SharePopup({setIsSharePopup}) {
  const handleCloseShare=()=>{
    setIsSharePopup(false)
  }
  return (
    <div className={styles.sharePopup}>
      <img src={closeIcon} alt="" className={styles.closeIcon} onClick={handleCloseShare}/>
          <div className={styles.header}>
            <h3>Invite by Email</h3>
            <select name="mode" id="" className={styles.mode}>
                <option value="edit" name="mode" selected className={styles.mode}>Edit</option>
                <option value="view" name="mode" selected className={styles.mode}>View</option>
            </select>
          </div>
          <input type="text" placeholder="Enter email id" className={styles.emailInput}/>
          <button className={styles.button}>Send Invite</button>
          <h3>Invite by link</h3>
          <button className={styles.button}>Copy link</button>
        </div>
  )
}

export default SharePopup