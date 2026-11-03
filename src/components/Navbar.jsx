"use client";

import { useState } from "react";
import estilos from "./navbar.module.css";

export const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    const nextTheme = isLightTheme ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    setIsLightTheme(!isLightTheme);
  };

  return (
    <nav className={estilos.barraNavegacion}>
      <h4 className={estilos.nombrePortafolio}>{'</>  Jose Ibarra'}</h4>
      <div className={estilos.contenedorEnlaces}>
        <a className={estilos.enlace} href="#inicio">Inicio</a>
        <a className={estilos.enlace} href="#proyectos">Proyectos</a>
        <a className={estilos.enlace} href="#sobre-mi">Sobre mí</a>
        <a className={estilos.enlace} href="#contacto">Contacto</a>
      </div>
      <button
        className={estilos.botonCambiarTema}
        type="button"
        onClick={toggleTheme}
        aria-label={`Cambiar a tema ${isLightTheme ? "oscuro" : "claro"}`}
        aria-pressed={isLightTheme}
      >
        <i
          className={`${estilos.iconoTema} ${!isLightTheme ? estilos.iconoSol : ""} fi ${isLightTheme ? "fi-sr-moon" : "fi-sr-sun"}`}
          aria-hidden="true"
        ></i>
      </button>
    </nav>
  );
};

export default Navbar;