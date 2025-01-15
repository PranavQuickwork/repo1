import React,{useState,useEffect} from "react";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = ()=>{
  const[tasks,setTasks]=useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
