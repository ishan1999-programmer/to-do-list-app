import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function App(){
  let [tasks , setTasks] = useState([]);

  function addTask(task){
    if(task.text){
        setTasks([...tasks , task]);
    }
  }

  function deleteTask(taskIndex){
    setTasks(tasks.filter((val,idx) => idx!=taskIndex));
  }

  function doneTask(taskIndex){
    setTasks(tasks.map((val,idx) => {
      if(idx==taskIndex){
        return { ...val, isDone: !val.isDone }; 
      }
      return val;
    }))
  }
  return(
    <div className="content">
        <h1>Lets Plan your Day...</h1>
        <br />
        <AddTask addTask = {addTask} />
        <TaskList tasks = {tasks} deleteTask={deleteTask} doneTask={doneTask}/>
    </div>
  );
}