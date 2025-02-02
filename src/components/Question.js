import React, { useState } from "react";

const Question = ({ data, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleAnswer(option.is_correct); // Pass whether the answer is correct
  };

  return (
    <div>
      <h2>{data.description}</h2> {/* Render the question description */}
      <div className="options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption && selectedOption.id === option.id ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.description} {/* Render only the description of each option */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
