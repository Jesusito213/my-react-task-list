import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../hojas-de-estilo/TaskList.css';

function TaskList() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);

    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
  };
  
  useEffect(() => {
    const localStorageData = localStorage.getItem("tareas");
    if(localStorageData){
      try{
        const storedTareas = JSON.parse(localStorageData);
        setTareas(storedTareas);
      }catch(err){
        console.err("Error parsing favourite items from localStorage")
      }
    }
  }, []);
  
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
