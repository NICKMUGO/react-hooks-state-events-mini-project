import React ,{useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
 console.log("Here's the data you're working with");
 console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTask]=useState(TASKS)
 const [allTasks,setAllTasks]=useState(TASKS)
 // console.log(listsToDisplay)
 const [selectedCategory,setSelectedCategory]=useState("All")
  function deleteTask(text){
    const newTasks=tasks.filter(task=>task.text!==text)
    setTask(newTasks)
  }

  function selectTask(category){
    setSelectedCategory(category)
    if(category==="All"){
      setTask(allTasks);
    }
    else{
   let newTasks= allTasks.filter(task=>task.category===category)
   setTask(newTasks)
  }


  }
  function  onTaskFormSubmit(taskObj){
    setTask(task=>[...task,taskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  tasks={TASKS} categories={CATEGORIES}  selectedCategory={selectedCategory} selectTask={selectTask}/>
      <NewTaskForm categories={CATEGORIES}  onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
export default App;