import React from "react";
import styles from "./WorkspaceHeader.module.css";
import ToggleTheme from "./ToggleTheme";
import closeIcon from "../assets/closeIcon.png";
import { useNavigate } from "react-router-dom";
function WorkspaceHeader({ handleSaveForm, handleShareForm, formName, isFlow, setIsFlow }) {
  const navigate=useNavigate()
  // const handleSave=()=>{

  //   navigate('/form')
  // }
// console.log(formName)
const handleCloseWorkspace=()=>{
  navigate('/dashboard')
}
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={formName}
        placeholder="Enter Form Name"
        className={styles.formInput}
      />
      <div className={styles.options}>
        <p className={isFlow ?`${styles.showFlowBtn} ${styles.active}`:styles.showFlowBtn} onClick={()=>setIsFlow(true)}>Flow</p>
        <p className={isFlow ? styles.showResponseBtn: `${styles.showResponseBtn} ${styles.active}`}  onClick={()=>setIsFlow(false)}>Response</p>
      </div>

      <ToggleTheme />
      <button className={styles.shareBtn} onClick={handleShareForm}>
        Share
      </button>
      <button className={styles.saveBtn} onClick={handleSaveForm}>
        Save
      </button>
      <img src={closeIcon} alt="" className={styles.closeIcon} onClick={handleCloseWorkspace}/>
    </div>
  );
}

export default WorkspaceHeader;
