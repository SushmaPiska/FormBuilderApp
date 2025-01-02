import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import saveIcon from "../assets/saveIcon.png";
const QuestionAnswerForm = () => {
  const questions = [
    { id: 1, type: "bubble", content: "Welcome to the form!", completed: true },
    {
      id: 2,
      type: "input",
      content: "What is your name?",
      value: "",
      completed: false,
    },
    { id: 3, type: "bubble", content: "Nice to meet you!", completed: false },
    {
      id: 4,
      type: "input",
      content: "How old are you?",
      value: "",
      completed: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const currentQuestion = questions[currentIndex];
    if (currentQuestion?.type === "bubble") {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, questions]);

  const handleAnswerChange = (e) => {
    const updatedAnswers = {
      ...answers,
      [questions[currentIndex].id]: e.target.value,
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
      {questions.slice(0, currentIndex + 1).map((question, index) => (
        <div key={question.id} style={{ marginBottom: "20px" }}>
          {question.type === "bubble" && (
            <div className={styles.bubble}>{question.content}</div>
          )}

          {question.type === "input" && (
            <div>
              <p className={styles.bubble}>{question.content}</p>
              <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Your answer"
                value={answers[question.id] || ""}
                onChange={handleAnswerChange}
                className={currentIndex === index ? styles.input : styles.reply}
              />
              {currentIndex === index && (
                <button
                  className={styles.saveBtn}
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  <img src={saveIcon} alt="" className={styles.saveIcon} />
                </button>
              )}
              </div>
            </div>
          )}
        </div>
      ))}

      {currentIndex === questions.length && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default QuestionAnswerForm;
