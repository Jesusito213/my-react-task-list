import "../hojas-de-estilo/SobreMi.css";

export default function SobreMi() {
	return (
		<div className="sobre-mi-container">
			<h2>Aplicación de tareas</h2>
			<h3>¿De qué se trata esta aplicación?</h3>
			<p>
				Esta aplicación te ayudará a administrar tus tareas diarias de una
				manera dinámica y muy fácil.
			</p>
			<h3>¿Para qué sirve esta aplicación?</h3>
			<p>
				Esto te será muy útil para llevar un registro de todas tus tareas
				importantes del día a día o de tu semana, como tú quieras utilizarla.
			</p>
			<h3>
				¿Cuáles son las funcionalidades más importantes y por qué debes usarla?
			</h3>
			<p>
				Al ser una lista para que pongas tus tareas, esta te ofrece las
				funcionalidades de añadir nuevas tareas, eliminarlas, podrás editar
				cualquier tarea cuando quieras, tacharla si ya la completaste y además,
				aunque cierres la página aún tendrás acceso a la información que habías
				proporcionado. Si te gustaría tener tus tareas diaras de una forma
				organizada y fácil, esta aplicación es para tí. Próximamente se irán
				añadiendo más funcionalidades con tal de brindar la mejor accesibilidad
				al usuario.
			</p>
			<h3>¿Qué tecnologías se usaron para desarrollar esta aplicación?</h3>
      <ul>
        <li className="lista-tecnologias">HTML/CSS</li>
        <li className="lista-tecnologias">JavaScript</li>
        <li className="lista-tecnologias">React</li>
      </ul>
		</div>
	);
}
