import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import saveIcon from "../assets/saveIcon.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const { id } = useParams();
  const [formElements, setFormElements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/form/getFormById/${id}`)
      .then((response) => {
        console.log(response.data.elements);
        setFormElements(response.data.elements);
      })
      .catch((error) => console.error("Failed to fetch form:", error));
  }, [id]);

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
      [formElements[currentIndex]._id]: e.target.value, 
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    


    // alert("Form submitted successfully!");
    navigate('/formSubmitSuccess')

  };

  return (
    <div className={styles.container}>
      {formElements?.slice(0, currentIndex + 1).map((element, index) => (
        <div key={element._id} style={{ marginBottom: "20px" }}> 
        {element.elementName ==="buttonInput"}
          {element.type === "bubble" && (
            <div className={styles.bubble}>{element.bubbleContent}</div>
          )}

          {element.type === "input" && (
            <div>
              {/* <p className={styles.bubble}>{element.bubbleContent}</p> */}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your answer"
                  value={answers[element._id] || ""} 
                  onChange={handleAnswerChange}
                  className={
                    currentIndex === index ? styles.input : styles.reply
                  }
                />
                {currentIndex === index && (
                  <button
                    className={styles.saveBtn}
                    onClick={handleNext}
                    disabled={!answers[element._id]} 
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
        <button onClick={handleSubmit} className={styles.submitBtn}>Submit</button>
      )}
    </div>
  );
};

export default Form;
