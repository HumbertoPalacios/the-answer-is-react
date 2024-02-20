// Clue component with three props 
const Clue = ({ value, question, isAnswered }) => {
  if (isAnswered) { // Verfify if the clue has been answered 
    return <div className="clueValue" data-testid="answered"></div>; // If so, render an empty screen/div
  }
  if (question) { // If the clue has not been answered but the question is available
    return (
      <div className="clueQuestion" data-testid="question"> {question} </div> // Show the question
    );
  }
  return (
    <div className="clueValue" data-testid="value">${value}</div> // Otherwise, show the clue's dollar value
  );
};

export default Clue; // Export Clue component so it can be utilized externally 
