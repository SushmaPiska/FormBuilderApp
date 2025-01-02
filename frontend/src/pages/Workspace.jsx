import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Workspace.module.css";
import WorkspaceHeader from "../components/WorkspaceHeader";
import FormInputList from "../components/FormInputList";
import FlowArea from "../components/FlowArea";
function Workspace() {

  const location = useLocation();
  const { form, formName } = location.state || {};


  const [elementType, setElementType]=useState("")
  const [element, setElement]=useState({})
  const [flowElements, setFlowElements]=useState(form?.elements || [])
  const [bubbleContent, setBubbleContent]=useState("");
  

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user && user._id;


  const handleSaveForm = async () => {
    try {
      const newForm = {
        name: formName || "New Form", 
        elements: flowElements ,
        creator: userId, 
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/form/create`,
        newForm
      );

      if (response.status === 201) {
        alert("Form saved successfully!");
      } else {
        alert("Failed to save the form.");
      }
    } catch (error) {
      console.error("Error saving form:", error.response?.data || error.message);
      alert("An error occurred while saving the form.");
    }
  };


  return (
    <div className={styles.container}>
      <WorkspaceHeader handleSaveForm={handleSaveForm}/>
      <div className={styles.body}>
        <div className={styles.formInputList}>
          <FormInputList setElementType={setElementType} setElement={setElement} flowElements={flowElements} setFlowElements={setFlowElements} bubbleContent={bubbleContent}/>
        </div>
        <div className={styles.flow}>
          <FlowArea elementType={elementType} element={element} setElement={setElement} flowElements={flowElements} setFlowElements={setFlowElements} 
          bubbleContent={bubbleContent}
           setBubbleContent={setBubbleContent}
          form={form} 
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
