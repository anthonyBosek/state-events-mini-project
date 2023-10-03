import Task from "./Task";

const TaskList = ({ tasks, handleDelete }) => {
  const taskList = tasks.map(({ text, category }) => (
    <Task
      key={text}
      text={text}
      category={category}
      handleDelete={handleDelete}
    />
  ));

  return <div className="tasks">{taskList}</div>;
};

export default TaskList;
