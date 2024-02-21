import React from 'react';
import Categories from './Categories'; // Make sure this is correctly imported
import Clue from './Clue'; // Adjust based on how Clue is implemented

const Gameboard = ({ categories, currentQuestion }) => {
  // Determine if a question was clicked based on the presence of currentQuestion data
  const questionClicked = currentQuestion && currentQuestion.question;

  return (
    <div
      data-testid="gameboard"
      id={questionClicked ? "question" : "gameboard"}
    >
      {questionClicked ? (
        // If a question was clicked, show the Clue component or clue details
        // Adjust this part based on how your Clue component expects its props
        <Clue 
          question={currentQuestion.question}
          value={currentQuestion.value}
          answer={currentQuestion.answer}
          // You might need to adjust or add more props based on Clue's implementation
        />
      ) : (
        // If no question was clicked, show all categories
        <Categories categories={categories} />
      )}
    </div>
  );
};

export default Gameboard;