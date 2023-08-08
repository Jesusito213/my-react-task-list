import React from 'react';
import { Link } from 'react-router-dom';
import "../hojas-de-estilo/Menu.css"

export default function Menu() {
  return (
    <div className='hero'>
      <nav className="nav container" id="nav">
        <h2 className="nav__logo">TuLogo.</h2>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/"><a>Home</a></Link>
          </li>
          <li className="nav__item">
            <Link to="/sobre-mi"><a>Sobre Mi</a></Link>
          </li>
          <li className="nav__item">
            <Link to="/Tarea/1"><a>Aplicación de Tareas</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
