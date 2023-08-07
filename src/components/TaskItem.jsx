import { FaTrashAlt } from "react-icons/fa";
import TaskEdit from "./TaskEdit";

export default function TaskItem ({
    task,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) {
    return (
        <li>
        <span
            onClick={() => handleCompleteTask(task.id)}
        >
            <label className={`container-complete ${task.complete ? 'active' : ''}`}></label>
        </span>
        <TaskEdit
        task={task} handleUpdateTask={handleUpdateTask}
        />
        <button className="btn-delete" onClick={() => handleDeleteTask(task.id)}><FaTrashAlt/></button>
    </li>
     )
}