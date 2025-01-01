import React, { useState } from "react";
import styles from "./Form.module.css";
function Form() {

  const [elements, setElements] = useState([
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
  ]);

  const handleInputChange = (id, value) => {
    const updatedElements = elements.map((element) =>
      element.id === id ? { ...element, value, completed: !!value } : element
    );
    setElements(updatedElements);
  };

  const nextElementIndex = elements.findIndex((el) => !el.completed);

  return (
    <div>
      {elements.slice(0, nextElementIndex + 1).map((element) =>
        element.type === "bubble" ? (
          <div key={element.id} className="bubble">
            {element.content}
          </div>
        ) : (
          <div key={element.id} className="input">
            <label>{element.content}</label>
            <input
              type="text"
              value={element.value}
              onChange={(e) => handleInputChange(element.id, e.target.value)}
            />
          </div>
        )
      )}
    </div>
  );
}

export default Form;
