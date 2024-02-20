import Category from "./Category"; // import Category component so we can use it

const Categories = (categories) => {
  return (
    <div id="categories" data-testid="categoryList">
      {categories.map((category) => (
        <Category key={category.id} title={category.title} clues={category.clues} />
      ))}
    </div>
  );
};

export default Categories; //export component so it can be used by other components 
