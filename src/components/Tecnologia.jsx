import estilos from "./tecnologia.module.css";
export default function Tecnologia() {
  return (
    
    <>
    <div id="tecnologias" className={estilos.contenedorTecnologia}>
      <div className={estilos.contenedorTexto}>
        <h5>Tecnologias</h5>
        <h2>Herramientas y Tecnologias</h2>
        <p>Estas son algunas de las tecnologias con las que eh trabajado o las sigo aprendiendo</p>
      </div>
      <div className={estilos.contenedorIconos}>
        <div className={estilos.divIconos}>
           <i className={`devicon-html5-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>html</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-css3-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>css</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-javascript-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <span>javascript</span>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-nodejs-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <span>node</span>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-express-original ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>express</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-mysql-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>mysql</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-react-original colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>react</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-git-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>git</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-nextjs-plain ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>next</p>
           <span>experiencia</span> 
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-postgresql-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>postgreSQL</p>
            <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-vercel-original ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>vercel</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <svg className={estilos.iconoNeon} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Neon</title><path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z"/></svg>
           <p>neon</p>
           <span>experiencia</span>
        </div>
        <div className={estilos.divIconos}>
           <i className={`devicon-docker-plain colored ${estilos.iconoTecnologia}`} aria-hidden="true"></i>
           <p>docker</p>
           <span>aprendizaje</span>
        </div>
      </div>
    </div>
    
    </>
  )
}
