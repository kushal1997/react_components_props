import logo from './logo.svg';
import './App.css';

function App(){
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
    <div className="App">
        <h1>Task List</h1>
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
    </div>
  );
}
export default App;
