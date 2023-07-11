import TaskForm from './TaskForm';
import Task from './Task';
import '../hojas-de-estilo/TaskList.css';
import { useOptimize } from '../hooks/useOptimize';

function TaskList() {

  const {agregarTarea, eliminarTarea, completarTarea, tareas} = useOptimize()
  
  return (
    <>
      <TaskForm onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Task
              key={tarea.id}
              id={tarea.id} 
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          ) 
        }
      </div>
    </>
  );    
}

export default TaskList;
