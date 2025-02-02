import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to the Quiz!</h1>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Home;
