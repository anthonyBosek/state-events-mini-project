import { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [formData, setFormData] = useState({ text: "", category: "Code" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const options = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
