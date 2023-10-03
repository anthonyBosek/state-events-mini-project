import Button from "./Button";

const CategoryFilter = ({ categories, category, setCategory }) => {
  const buttons = categories.map((txt) => (
    <Button
      key={txt}
      txt={txt}
      className={txt === category ? "selected" : null}
      setCategory={setCategory}
    />
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
};

export default CategoryFilter;
