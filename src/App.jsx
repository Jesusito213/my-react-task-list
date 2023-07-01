import './App.css';
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Mi lista de tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;