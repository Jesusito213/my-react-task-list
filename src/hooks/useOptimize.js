import { useState, useEffect } from "react";

export const useOptimize = () => {
  
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
      }catch(error){
        console.log("Error parsing favourite items from localStorage")
      }
    }
  }, [])
  return {
    agregarTarea, eliminarTarea, completarTarea, tareas
  }
} 
