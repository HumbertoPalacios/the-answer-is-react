import Category from "./Category.jsx"
// Adjust the Categories component to correctly receive props
const Categories = ({ categories }) => { // Corrected prop destructuring
  return (
    <div id="categories" data-testid="categoryList">
      {categories.map((category) => (
        <Category key={category.id} title={category.title} clues={category.clues} />
      ))}
    </div>
  );
};

export default Categories
