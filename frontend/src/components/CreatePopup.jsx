import React, { useState } from "react";
import styles from "./CreatePopup.module.css";
import axios from "axios";
function CreatePopup({ createWhat, setIsCreateClicked, setFormsChange }) {
    
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user && user._id;

  const [formName, setFormName] = useState();
  const handleCancel = () => {
    setIsCreateClicked(false);
  };
  const handleFormCreated = async () => {
    setIsCreateClicked(false);
    setFormsChange(true)
    try {
      const newForm = {
        name: formName || "New Form",
        creator: userId,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/form/createForm`,
        newForm
      );

      if (response.status === 201) {
        alert("Form saved successfully!");
      } else {
        alert("Failed to save the form.");
      }
    } catch (error) {
      console.error(
        "Error saving form:",
        error.response?.data || error.message
      );
      alert("An error occurred while saving the form.");
    }
  };

  // const handleDone=()=>{
  //     if(createWhat==="form"){

  //     }
  //     setIsCreateClicked(false)

  // }
  return (
    <div className={styles.container}>
      <p className={styles.head}>Create New {createWhat}</p>
      <input
        type="text"
        value={formName}
        placeholder={`Enter ${createWhat} name`}
        className={styles.input}
        onChange={(e) => setFormName(e.target.value)}
      />
      <div className={styles.foot}>
        <p className={styles.done} onClick={handleFormCreated}>
          Done
        </p>
        <p className={styles.cancel} onClick={handleCancel}>
          Cancel
        </p>
      </div>
    </div>
  );
}

export default CreatePopup;
