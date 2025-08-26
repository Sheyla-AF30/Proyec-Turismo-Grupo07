import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'

export const Header = () => {

  return (
    <header>
    <h1>Turismo Web Perú</h1>
    <nav>
      <ul className="menu">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "activo" : "")}>Inicio</NavLink></li>
        <li><NavLink to="/destinos" className={({ isActive }) => (isActive ? "activo" : "")}>Destinos</NavLink></li>
        <li><NavLink to="/experiencias" className={({ isActive }) => (isActive ? "activo" : "")}>Experiencias</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "activo" : "")}>Contáctanos</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}
