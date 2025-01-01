import React from "react";
import styles from "./DeletePopup.module.css";
function DeletePopup({deleteWhat, setIsDeleteClicked}) {
    const handleCancel=()=>{
        setIsDeleteClicked(false);
    }
    const handleConfirm=()=>{
        setIsDeleteClicked(false)
    }
  return (
    <div className={styles.container}>
      <p className={styles.head}>Are you sure you want to delete this {deleteWhat} ?</p>
      <div className={styles.foot}>
        <p className={styles.confirm} onClick={handleConfirm}>
          Confirm
        </p>
        <p className={styles.cancel} onClick={handleCancel}>
          Cancel
        </p>
      </div>
    </div>
  );
}

export default DeletePopup;
