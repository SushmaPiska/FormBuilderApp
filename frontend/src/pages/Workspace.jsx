import React, { useState } from "react";
import styles from "./Workspace.module.css";
import WorkspaceHeader from "../components/WorkspaceHeader";
import FormInputList from "../components/FormInputList";
import FlowArea from "../components/FlowArea";
function Workspace() {
  const [elementType, setElementType]=useState("")
  const [element, setElement]=useState({})
  const [flowElements, setFlowElements]=useState([])
  const [bubbleContent, setBubbleContent]=useState("");
  return (
    <div className={styles.container}>
      <WorkspaceHeader />
      <div className={styles.body}>
        <div className={styles.formInputList}>
          <FormInputList setElementType={setElementType} setElement={setElement} flowElements={flowElements} setFlowElements={setFlowElements} bubbleContent={bubbleContent}/>
        </div>
        <div className={styles.flow}>
          <FlowArea elementType={elementType} element={element} setElement={setElement} flowElements={flowElements} setFlowElements={setFlowElements} 
          bubbleContent={bubbleContent}
           setBubbleContent={setBubbleContent}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
