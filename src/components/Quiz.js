import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/quizData.json"); // Fetching from the public folder
        setQuestions(response.data.questions);
      } catch (err) {
        setError("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 10); // 10 points per correct answer
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/results", { state: { score, total: questions.length * 10 } });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ScoreBoard score={score} />
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      <Question
        data={questions[currentIndex]}
        options={questions[currentIndex].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
