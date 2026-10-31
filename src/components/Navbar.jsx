import navbar from "./navbar.css";

export const Navbar = () => {

  
  return (
    <nav className="navbar">
     <h4 className="nombreh2">{'</>  Jose Ibarra'}</h4>
     <div className="contenedor-a">
     <a className="boton-inicio">Inicio</a>
     <a className="boton-proyectos">Proyectos</a>
     <a className="boton-abaut">Abaut me</a>
     <a className="boton-contacto">Contacto</a>
     <a className="boton-tecnologias">Tecnologias</a>
     </div>
     <button className="cambiartema"><i className="fi fi-sr-sun"></i></button>
    </nav>
    
  )
}
export default Navbar