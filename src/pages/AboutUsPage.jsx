import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

export default function AboutUsPage() {
	return (
		<div>
			<Accordion>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
								¿Qué es mi producto?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Esta es una página web con una aplicación de tareas hecha con la
						tecnología React
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
								¿Para que sirve?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<p>
							La Aplicación de Lista de Tareas es una solución tecnológica
							diseñada para gestionar eficientemente las tareas pendientes de
							los usuarios. La aplicación ofrece una serie de características
							clave que permiten a los usuarios mantener un control detallado
							sobre sus actividades diarias, está construida utilizando
							tecnologías modernas de desarrollo web, lo que garantiza su
							accesibilidad y usabilidad en una variedad de plataformas y
							dispositivos.
						</p>
						<h3>Características Principales: </h3>
						<ul>
							<li>
								1. Gestión de Tareas: La aplicación permite a los usuarios
								agregar nuevas tareas a su lista. Cada tarea puede tener una
								descripción detallada que proporciona información adicional
								sobre la tarea en cuestión. La interfaz de usuario intuitiva
								facilita la entrada de datos, lo que permite a los usuarios
								capturar tareas de manera rápida y sencilla.
							</li>
							<br />
							<li>
								2. Edición de Tareas: Los usuarios tienen la capacidad de editar
								tanto el título como la descripción de las tareas existentes.
								Esta característica es especialmente útil cuando se requiere
								actualizar información relevante o hacer ajustes a las tareas a
								medida que evolucionan con el tiempo.
							</li>
							<br />
							<li>
								3. Eliminación de Tareas: La aplicación permite a los usuarios
								eliminar tareas de su lista. Esta función es útil para eliminar
								tareas que ya no son relevantes o necesarias.
							</li>
							<br />
							<li>
								4. Contador de Tareas Pendientes: La aplicación rastrea
								automáticamente la cantidad de tareas pendientes en la lista.
								Esto proporciona a los usuarios una visión rápida y cuantitativa
								de su carga de trabajo actual, lo que puede ser útil para la
								planificación y priorización de actividades.
							</li>
							<br />
							<li>
								5. Tachar Tareas Completadas: Una vez que un usuario haya
								completado una tarea, puede marcarla como completada. La
								aplicación ofrece una función de "tachado" visual que indica
								claramente que una tarea ha sido realizada. Esto ayuda a los
								usuarios a seguir visualmente su progreso y mantener un registro
								de las tareas completadas.
							</li>
						</ul>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
								¿Qué tecnologías fueron usadas?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						La aplicación se desarrolla utilizando{" "}
						<span className="span-bold">HTML, CSS y JavaScript</span>, que son
						los lenguajes fundamentales para la creación de interfaces web
						interactivas y receptivas. Framework Frontend: Se utilizó React,
						para construir una interfaz dinámica y mejorar la experiencia del
						usuario.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

