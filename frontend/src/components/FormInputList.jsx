import React, { useEffect, useState } from "react";
import styles from "./FormInputList.module.css";
import textIcon from "../assets/textIcon.png";
import imageIcon from "../assets/imageIcon.png";
import videoIcon from "../assets/videoIcon.png";
import gif from "../assets/gif.png";
import textInputIcon from "../assets/textInputIcon.png";
import numberIcon from "../assets/numberIcon.png";
import emailIcon from "../assets/emailIcon.png";
import phoneIcon from "../assets/phoneIcon.png";
import dateIcon from "../assets/dateIcon.png";
import ratingIcon from "../assets/ratingIcon.png";
import buttonInputIcon from "../assets/buttonInputIcon.png";
import { set } from "mongoose";

function FormInputList({
  setElement,
  flowElements,
  setFlowElements,
  setElementType,
  bubbleContent
}) {
  
  const [counts, setCounts] = useState(
    flowElements.reduce(
      (acc, elementTitle) => ({ ...acc, [elementTitle]: 0 }),
      {}
    )
  );
 
 
  const handleAddElement = (elementTitle, element) => {
    const newCount = (counts[elementTitle] || 0) + 1;
    setCounts({ ...counts, [elementTitle]: newCount });

    const elementType = element.elementName.includes("Bubble") ? "bubble" : "input";

    const newElement = {
      title: `${elementTitle} ${newCount}`,
      elementName: element.elementName,
      type: elementType,
      bubbleContent: bubbleContent 
    }
      
    
    setFlowElements([...flowElements, newElement]);
    setElement(newElement);
  };
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Bubbles</p>
      <ul className={styles.bubbleList}>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Text",{elementName:"textBubble", bubbleContent:""} )}
        >
          <img src={textIcon} alt="" />
          <p>Text</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Image", {elementName:"imageBubble", bubbleContent:""})}
        >
          <img src={imageIcon} alt="" />
          <p>Image</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Video", {elementName:"videoBubble", bubbleContent:""})}
        >
          <img src={videoIcon} alt="" />
          <p>Video</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("GIF",{elementName:"gifBubble", bubbleContent:""} )}
        >
          <img src={gif} alt="" className={styles.gifIcon} />
          <p>GIF</p>
        </li>
      </ul>
      <p className={styles.heading}>Inputs</p>
      <ul className={styles.inputList}>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Text", {elementName:"textInput", bubbleContent:""})}
        >
          <img src={textInputIcon} alt="" />
          <p>Text</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Number", {elementName:"numberInput", bubbleContent:""})}
        >
          <img src={numberIcon} alt="" />
          <p>Number</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Email", {elementName:"emailInput", bubbleContent:""})}
        >
          <img src={emailIcon} alt="" />
          <p>Email</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Phone",{elementName:"phoneInput", bubbleContent:""} )}
        >
          <img src={phoneIcon} alt="" />
          <p>Phone</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("input Date", {elementName:"dateInput", bubbleContent:""})}
        >
          <img src={dateIcon} alt="" />
          <p>Date</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Rating", {elementName:"ratingInput", bubbleContent:""})}
        >
          <img src={ratingIcon} alt="" />
          <p>Rating</p>
        </li>
        <li
          className={styles.bubble}
          onClick={() => handleAddElement("Input Button", {elementName:"buttonInput", bubbleContent:""})}
        >
          <img src={buttonInputIcon} alt="" />
          <p>Buttons</p>
        </li>
      </ul>
    </div>
  );
}

export default FormInputList;
