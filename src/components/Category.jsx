import Clue from "./Clue.jsx" //import Clue component in order to utilize it

// Category component with two props 
const Category = ({title, clues}) => {
  // return a category div that maps through an array of categories and renders them 
  return (
    <div className="category" data-testid="category"> 
      <div className="categoryTitle">{title}</div>
      {clues.map((clue, index) => (
        // Render a Clue component for each clue, passing props to it.
        <Clue
          key={clue.id}
          value={clue.value}
          isAnswered={clue.isAnswered}
          onClick={() => handleClueClick(clue)}
        />
      ))}
    </div>
  );
};

export default Category; // Export Category component so it can be utilized 
