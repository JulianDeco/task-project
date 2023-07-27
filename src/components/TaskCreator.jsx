import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName !== '') {
      props.createNewTask(newTaskName)
    }
    
    setNewTaskName("");
  };

  return (
  <form onSubmit={handleSubmit} className=' row d-flex flex-column justify-content-center text-center bg-dark rounded' aria-label="form">

    <div className='my-2'>
      <input
        className='form-control'
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
    </div>
    <div className='my-2'>
      <button className = "btn btn-primary btn-sm">Save Task</button>
    </div>
  </form>
  );
};
