import React from "react";
import Header from "./TaskHeader";
import Task from "./Task";
import TaskList from "./TaskList";
import { useTask } from "../hooks/useTask";

export default function TaskAppPage() {
  const { tasks, tasksCount, pendingTasksCount, handleNewTask, handleDeleteTask, handleCompleteTask, handleUpdateTask } = useTask();

  return (
    <center>
      <div className="card-to-do">
  
        <div className="counter-todos">
          <h3>Tareas: <span className="numero-tareas">{tasksCount}</span></h3>
          <h3>Tareas Pendientes: <span className="numero-pendientes">{pendingTasksCount}</span></h3>
        </div>

        <div className="add-todo">
          <Header />
          <Task handleNewTask={handleNewTask} />
          <TaskList
            tasks={tasks}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        </div>

      </div>
    </center>
  );
}

