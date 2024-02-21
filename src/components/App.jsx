// Import essential hooks and components needed for the App component to function as intended
import { useState } from "react";
import data from "../testdata.js";
import Categories from "./Categories.jsx";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";

// App Component which renders the main UI on the screen
const App = () => {
  // Utilize useState() to create and initialize values
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  // Function to handle clicking a question, setting it as the current question
  const handleQuestionClick = (question) => {
    setCurrentQuestion(question);
    // Potentially update answeredQuestions here or within Response component
  };

  // Function to update score and reset current question
  const handleAnswer = (isCorrect, value) => {
    if (isCorrect) {
      setScore(score + value);
    } else {
      setScore(score - value);
    }
    setCurrentQuestion({}); // Reset current question to show categories again
  };

  const showResponse = Object.keys(currentQuestion).length > 0;

  return (
    <div id="app">
      <h1>What is Reactor 2?</h1>
      {showResponse ? (
        // Render Response only if there's a current question
        <Response 
          currentQuestion={currentQuestion}
          onAnswer={handleAnswer}
        />
      ) : (
        // Otherwise, show the Gameboard
        <Gameboard
          categories={categories}
          onQuestionClick={handleQuestionClick}
        />
      )}
      <Scoreboard score={score} />
    </div>
  );
};

export default App;
