const TaskList = ({ tasks, setTasks }) => {
    const deleteTask = (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, { method: 'DELETE' })
        .then(() => setTasks(tasks.filter((task) => task._id !== id))); // Remove task from state.
    };
  
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  