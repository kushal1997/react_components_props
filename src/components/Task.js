import { useState } from "react";

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
            <li key={task.id} className={task.completed? "completed":"incomplete"}>
              <span>{task.id} - {task.name}</span>
              <button onClick={()=> handleDelete(task.id)}>Delete</button>
            </li>
          ))
        }
          
        </ul>
    </>
  )
}
