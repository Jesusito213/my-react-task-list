import "../hojas-de-estilo/Home.css";
import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box bg={"#ffff"}>
			<div className="home-container">
				<h1>Este es mi portafolio</h1>
				<p>
					Aquí encontrarás toda la información sobre mi persona y todos los
					proyectos que he realizado
				</p>
			</div>
		</Box>
	);
}
