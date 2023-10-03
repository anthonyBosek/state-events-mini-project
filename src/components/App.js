import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
//* console.log({ CATEGORIES, TASKS });

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const handleDelete = (e) =>
    setTasks(tasks.filter(({ text }) => text !== e.target.id));

  const onTaskFormSubmit = (task) => setTasks([...tasks, task]);

  const filteredTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        category={category}
        setCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((x) => x !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
