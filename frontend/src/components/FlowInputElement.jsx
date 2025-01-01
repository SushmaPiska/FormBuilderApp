import React, { useState } from "react";
import styles from "./FlowInputElement.module.css";
import deleteIcon from '../assets/deleteIcon.png'
function FlowInputElement({ elementType, element , setElement, bubbleContent, setBubbleContent, handleElementUpdate}) {
//   console.log(element);
const handleChange = (e) => {
  const updatedElement = { ...element, bubbleContent: e.target.value };
  handleElementUpdate(updatedElement);
};
  return (
    <div className={styles.container}>
      <p>{element.title} {element.typeCount}</p>
      {element.type === "bubble" ? (
       
        element.title.startsWith("Text") ? (
          <input
          type="text"
          placeholder="Click to add text"
          value={bubbleContent}
          className={`${styles.textBubble} ${styles.content}`}
          onChange={(e) =>handleChange(e)
          }
        />
        ) : (
          <input
            type="text"
            placeholder="Click to add link"
            value={element.bubbleContent}
            className={`${styles.textBubble} ${styles.content}`}
            onChange={(e)=>handleChange(e)}
          />
        )
      ) : (
        <p className={styles.hint}>
          Hint: User will give a {element.title} on his form
        </p>
      )}
        {/* <div className={styles.deleteContainer}><img src={deleteIcon} alt="" className={deleteIcon}/></div> */}
    </div>
  );
}

export default FlowInputElement;
