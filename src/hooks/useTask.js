import {useEffect, useReducer} from "react"
import { taskReducer } from "../taskReducer";


export const useTask = () => {
    const initialStates = [];

    const init = () => {
        return JSON.parse (localStorage.getItem('tasks')) || []
    }

    const [tasks,dispatch] = useReducer(
        taskReducer, 
        initialStates, 
        init
        );
    
    const tasksCount = tasks.length
    const pendingTasksCount = tasks.filter(task => !task.complete).length

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    
    const handleNewTask = task => {
        const action = {
            type: "Add task",
            payload: task,
        }

        dispatch (action)
    }

    const handleDeleteTask = id => {
        const action = {
            type: 'Delete task',
            payload: id,
        }
        dispatch (action);
    }

    const handleCompleteTask = id => {
        const action ={
            type: 'Complete task',
            payload: id
        }

        dispatch (action)
    }
    const handleUpdateTask = (id, description) => {
        const action ={
            type: 'Update Task',
            payload: {
                id, 
                description
            }
        }
        dispatch (action);
    }

    return {
        tasks,
        tasksCount,
        pendingTasksCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
}