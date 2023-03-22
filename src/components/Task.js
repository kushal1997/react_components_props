import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const Task = (props) => {
    const [tasks,setTasks]=useState([
        {id: 1, name:"Record Videos", completed:false },
        {id: 2, name:"Listem Music", completed:true},
        {id: 3, name:"Study", completed:false}
      ]);
    const [show,setShow]=useState(true);
    
    function handleDelete(id){
    setTasks(tasks.filter(task => id!== task.id));
    
      }

  return (
    <>
        <h1>Task List {props.title} {props.subtitle}</h1>
        <ul>
        <button onClick={()=> setShow(!show)}>Toggle</button>
        {
          show && tasks.map((task) =>(
            <TaskCard key={ task.id} task={task} handleDelete={handleDelete}/>
          ))
        }
          
        </ul>
    </>
  )
}
