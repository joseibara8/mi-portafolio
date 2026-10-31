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
        <a className={estilos.enlace}>Inicio</a>
        <a className={estilos.enlace}>Proyectos</a>
        <a className={estilos.enlace}>Abaut me</a>
        <a className={estilos.enlace}>Contacto</a>
        <a className={estilos.enlace}>Tecnologias</a>
      </div>
      <button
        className={estilos.botonCambiarTema}
        type="button"
        onClick={toggleTheme}
        aria-label={`Cambiar a tema ${isLightTheme ? "oscuro" : "claro"}`}
        aria-pressed={isLightTheme}
      >
        <i
          className={`${estilos.iconoTema} fi ${isLightTheme ? "fi-sr-moon" : "fi-sr-sun"}`}
          aria-hidden="true"
        ></i>
      </button>
    </nav>
  );
};

export default Navbar;