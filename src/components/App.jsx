import { useState } from "react";
import data from "../testdata.js";
import Categories from "./Categories.jsx";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx"
import Category from "./Category.jsx";


const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <div id={"app"}>
      What is Reactor 2?
      {<Category/>}
      {/*<Gameboard/>*/}
      {/*<Scoreboard/>*/}
      {/*<Response/>*/}
    </div>
  );
};

export default App;
