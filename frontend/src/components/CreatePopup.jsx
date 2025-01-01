import React from 'react'
import styles from './CreatePopup.module.css'
function CreatePopup({createWhat,setIsCreateClicked}) {
    const handleCancel=()=>{
        setIsCreateClicked(false)
    }
    const handleDone=()=>{
        setIsCreateClicked(false)
    }
  return (
    <div className={styles.container}>
        <p className={styles.head}>Create New {createWhat}</p>
        <input type="text" placeholder={`Enter ${createWhat} name`}className={styles.input}/>
        <div className={styles.foot}>
            <p className={styles.done} onClick={handleDone}>Done</p>
            <p className={styles.cancel} onClick={handleCancel}>Cancel</p>
        </div>
    </div>
  )
}

export default CreatePopup