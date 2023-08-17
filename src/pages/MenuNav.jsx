import React from "react";
import { Link } from "react-router-dom";
import "../hojas-de-estilo/Menu.css";
import { Box, Flex, Menu } from "@chakra-ui/react";

export default function MenuNav() {
	return (
		<div className="hero">
			<Flex h={120} alignItems={"center"}>
				<Box>Logo</Box>
				<Menu>
					<li className="nav__item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav__item">
						<Link to="/sobre-mi">Sobre Mi</Link>
					</li>
					<li className="nav__item">
						<Link to="/Tarea/1">
							<a>Aplicación de Tareas</a>
						</Link>
					</li>
				</Menu>
			</Flex>
		</div>
	);
}
