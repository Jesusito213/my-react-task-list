import "./App.css";
import TaskList from "./components/TaskList.jsx";

function App() {
	return (
		<div className="aplicacion-tareas">
			<div className="tareas-lista-principal">
				<h1>Mi lista de tareas</h1>
				<TaskList />
			</div>
		</div>
	);
}

export default App;

// // Cada tarea debe tener una descripción y un estado de completada o pendiente, utiliza 
// valores booleanos.
// // Debes almacenar las tareas y su estado en localStorage cada vez que cambia alguna tarea.
//  Revisa la documentacion de localStorage para recordar como escribir valores.
// // Usa el hook useEffect para cargar el listado de tareas desde localStorage. 
// Con esto el usuario podra ver sus tareas cuando vuelva o recargue a la aplicación.
// // Publica tu código en Github, en tu repositorio my-react-task-list crea un branch llamado
//  project-2 y compártelo con nosotros. 👍🏼⬇️
