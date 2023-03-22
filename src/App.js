import { Task } from './components/Task';
import { Header } from './components/Header';
import './App.css';

function App(){
  
  return (
    <div className="App">
        <Header/>
        <Task title="Random" subtitle="Test"/>
        
    </div>
  );
}
export default App;
