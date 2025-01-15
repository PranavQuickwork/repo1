import { useState } from 'react';

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');

  const addTask = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks((prev) => [...prev, newTask])); // Add new task to state.
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
