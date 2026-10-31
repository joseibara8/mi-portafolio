import navbar from "./navbar.css";

export const Navbar = () => {

  
  return (
    <nav className="navbar">
     <h4 className="nombreh2">{'</>  Jose Ibarra'}</h4>
     <div className="contenedor-a">
     <a className="boton-inicio">inicio</a>
     <a className="boton-proyectos">proyectos</a>
     <a className="boton-abaut">abaut me</a>
     <a className="boton-contacto">contacto</a>
     <a className="boton-tecnologias">tecnologias</a>
     </div>
     <button className="cambiartema"><i className="fi fi-sr-sun"></i></button>
    </nav>
    
  )
}
export default Navbar