import React, { useState } from "react";
import styles from "./FlowArea.module.css";
import startIcon from "../assets/startIcon.png";
import FlowInputElement from "./FlowInputElement";
import deleteIcon from "../assets/deleteIcon.png";
function FlowArea({ elementType, element,setElement, flowElements, setFlowElements, bubbleContent, setBubbleContent, form }) {
console.log(form)


  const handleElementUpdate = (updatedElement) => {
    setFlowElements((prevElements) =>
      prevElements.map((el) =>
        el.title === updatedElement.title ? updatedElement : el
      )
    );
  };
  
  const handleRemoveElement = (index) => {
    const updatedFlowElements = flowElements.filter((_, i) => i !== index);

    setFlowElements(updatedFlowElements);
  };

  console.log(flowElements)
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={startIcon} alt="" />
        <p>Start</p>
      </div>
      <div className={styles.body}>
        {flowElements?.map((element, index) => (
          <div key={index} className={styles.element}>
            <FlowInputElement elementType={elementType} element={element} setElement={setElement} bubbleContent={element.bubbleContent} setBubbleContent={setBubbleContent} handleElementUpdate={handleElementUpdate}/>
            <div
              className={styles.deleteContainer}
              onClick={() => handleRemoveElement(index)}
            >
              <img src={deleteIcon} alt="" className={deleteIcon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowArea;
