import TaskItem from "./TaskItem";

export default function TaskList ({
    tasks,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) {
     return (
        <ul>
            {tasks.map(task =>( 
            <TaskItem
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            />
            ))}
        </ul>
        
     )
}