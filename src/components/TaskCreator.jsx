import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
  <form onSubmit={handleSubmit} className='my-2 row' aria-label="form">

    <div className='col-9 '>
      <input
        className='form-control'
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
    </div>
    <div className='col-3'>
      <button className = "btn btn-primary btn-sm">Save Task</button>
    </div>
  </form>
  );
};
