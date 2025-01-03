import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./Workspace.module.css";
import WorkspaceHeader from "../components/WorkspaceHeader";
import FormInputList from "../components/FormInputList";
import FlowArea from "../components/FlowArea";
function Workspace() {
  const location = useLocation();
  const { form, formName } = location.state || {};

  const [elementType, setElementType] = useState("");
  const [element, setElement] = useState({});
  const [flowElements, setFlowElements] = useState(form?.elements || []);
  const [bubbleContent, setBubbleContent] = useState("");

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user && user._id;

  const token = localStorage.getItem("token");

  const handleSaveForm = async () => {
    console.log(form);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/form/updateForm/${form._id}`,
        { name: formName, elements: flowElements },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
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

  const handleShareForm = async () => {
    console.log("share clicked")
    try {
      const BASE_URL =
        import.meta.env.MODE === "development"
          ? "http://localhost:5173"
          : VITE_BASE_URL;

      const link = `${BASE_URL}/form/${form._id}`;
      await navigator.clipboard.writeText(link);
      alert("link copied")
    } catch (error) {
      console.log("error in sharing" + error);
    }
  };

  return (
    <div className={styles.container}>
      <WorkspaceHeader
        handleSaveForm={handleSaveForm}
        handleShareForm={handleShareForm}
        formName={form.name}
      />
      <div className={styles.body}>
        <div className={styles.formInputList}>
          <FormInputList
            setElementType={setElementType}
            setElement={setElement}
            flowElements={flowElements}
            setFlowElements={setFlowElements}
            bubbleContent={bubbleContent}
          />
        </div>
        <div className={styles.flow}>
          <FlowArea
            elementType={elementType}
            element={element}
            setElement={setElement}
            flowElements={flowElements}
            setFlowElements={setFlowElements}
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
