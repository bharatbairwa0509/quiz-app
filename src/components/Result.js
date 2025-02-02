import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => navigate("/")}>Try Again</button>
    </div>
  );
};

export default Results;
