import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import saveIcon from "../assets/saveIcon.png";
import { useParams } from "react-router-dom";
import axios from "axios";
const QuestionAnswerForm = () => {
  const { id } = useParams();
  const [formElements, setFormElements] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/form/getFormById/${id}`)
      .then((response) => {
        console.log(response.data.elements)
        setFormElements(response.data.elements)

      })
      .catch((error) => console.error("Failed to fetch form:", error));
  }, [id]);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const currentQuestion = formElements[currentIndex];
    if (currentQuestion?.type === "bubble") {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, formElements]);

  const handleAnswerChange = (e) => {
    const updatedAnswers = {
      ...answers,
      [formElements[currentIndex].id]: e.target.value,
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Form submitted successfully!");
  };

  return (
    <div className={styles.container}>
      {formElements?.slice(0, currentIndex + 1).map((element, index) => (
        <div key={element.id} style={{ marginBottom: "20px" }}>
          {element.type === "bubble" && (
            <div className={styles.bubble}>{element.bubbleContent}</div>
          )}

          {element.type === "input" && (
            <div>
              <p className={styles.bubble}>{element.content}</p>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your answer"
                  value={answers[element.id] || ""}
                  onChange={handleAnswerChange}
                  className={
                    currentIndex === index ? styles.input : styles.reply
                  }
                />
                {currentIndex === index && (
                  <button
                    className={styles.saveBtn}
                    onClick={handleNext}
                    disabled={!answers[element.id]}
                  >
                    <img src={saveIcon} alt="" className={styles.saveIcon} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {currentIndex === formElements.length && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default QuestionAnswerForm;

[
  {
      "title": "Text 1",
      "elementName": "textBubble",
      "type": "bubble",
      "bubbleContent": "fav food?",
      "_id": "6777af451071a015aa749b89"
  },
  {
      "title": "Input Text 1",
      "elementName": "textInput",
      "type": "input",
      "bubbleContent": "",
      "_id": "6777af451071a015aa749b8a"
  },
  {
      "title": "Text 2",
      "elementName": "textBubble",
      "type": "bubble",
      "bubbleContent": "lucky num?",
      "_id": "6777af451071a015aa749b8b"
  },
  {
      "title": "Input Number 1",
      "elementName": "numberInput",
      "type": "input",
      "bubbleContent": "",
      "_id": "6777af451071a015aa749b8c"
  },
  {
      "title": "Input Button 1",
      "elementName": "buttonInput",
      "type": "input",
      "bubbleContent": "",
      "_id": "6777af451071a015aa749b8d"
  }
]
  //  [
  //   { id: 1, type: "bubble", content: "Welcome to the form!", completed: true },
  //   {
  //     id: 2,
  //     type: "input",
  //     content: "What is your name?",
  //     value: "",
  //     completed: false,
  //   },
  //   { id: 3, type: "bubble", content: "Nice to meet you!", completed: false },
  //   {
  //     id: 4,
  //     type: "input",
  //     content: "How old are you?",
  //     value: "",
  //     completed: false,
  //   },
  // ];

