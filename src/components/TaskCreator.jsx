import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter a new task"
      value={newTaskName}
      onChange={(e) => setNewTaskName(e.target.value)}
    />
    <button className = "btnSaveTask">Save Task</button>
  </form>
  );
};