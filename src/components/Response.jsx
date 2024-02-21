import { useState } from "react";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    setUserResponse(event.target.value); // Updates userResponse with the input field's current value
  };

  const submitResponse = (event) => {
    if (event.key === "Enter") { // Checks if the 'Enter' key was pressed
      // Check if the user response is correct (This is a placeholder, implement according to your logic)
      const isCorrect = userResponse === props.correctAnswer; // Assume props.correctAnswer holds the correct answer

      if (isCorrect) {
        // Implement what happens if the answer is correct (e.g., update score)
        console.log("Correct answer!");
      } else {
        // Implement what happens if the answer is incorrect
        console.log("Incorrect answer.");
      }

      setUserResponse(""); // Clear the input field after submission
      // Implement any additional actions needed after submitting the response
    }
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        value={userResponse} // Controlled component: input's value is set to userResponse state
        onChange={recordResponse} // Handle data change
        onKeyPress={submitResponse} // Handle when 'Enter' is hit
      />
    </div>
  );
};

export default Response;