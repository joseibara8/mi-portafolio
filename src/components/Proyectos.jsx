import estilos from "./proyectos.module.css";

const Proyectos = () => {
  return (
    <>
      <div id="proyectos" className={estilos.contenedor}>
        <div className={estilos.contenedor1}>
          <div className={estilos.contenedorTitulo}>
            <i className="fi fi-rr-folder-open"></i>
            <h5>proyecto</h5>
          </div>

          <h2>
            Mis <strong>Poyectos</strong>
          </h2>
          <p>
            alguanas de las aplicaciones que eh desarrollado o estoy trabajando
          </p>
        </div>
        <div className={estilos.contenedorProyectos}>
          <div className={estilos.proyecto}>
            <img src="/notasweb.jpeg" alt="" />
            <h3>notas</h3>
            <p>
              aplicacion web para crear,editar y elimanar notas con login y
              registro y base de datos
            </p>

            <div className={estilos.iconos}>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-react-original colored"
                  aria-hidden="true"
                ></i>
                <p>react</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-postgresql-plain colored"
                  aria-hidden="true"
                ></i>
                <p>postgres</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-nextjs-original-wordmark colored"
                  aria-hidden="true"
                ></i>
                <p>next</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-nodejs-plain colored"
                  aria-hidden="true"
                ></i>
                <p>node</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-css3-plain colored"
                  aria-hidden="true"
                ></i>
                <p>css</p>
              </div>
            </div>
            <div className={estilos.contenedorbotones}>
              <a
                className={estilos.botonDemo}
                href="https://notas-react-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/exterior (1).png" alt="" />
                Demo
              </a>
              <a
                className={estilos.botonCodigo}
                href="https://github.com/joseibara8/notas_react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código
              </a>
            </div>
          </div>


          <div className={estilos.proyecto}>
            <img src="/proximamente.png" alt="" />
            <h3>punto de venta</h3>
            <p>
              sistema de punto de ventas para abarrotes, con gestion de productos, categorias y ventas
            </p>

            <div className={estilos.iconos}>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-react-original colored"
                  aria-hidden="true"
                ></i>
                <p>react</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-postgresql-plain colored"
                  aria-hidden="true"
                ></i>
                <p>postgres</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-nextjs-original-wordmark colored"
                  aria-hidden="true"
                ></i>
                <p>next</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-nodejs-plain colored"
                  aria-hidden="true"
                ></i>
                <p>node</p>
              </div>
              <div className={estilos.iconoProyecto}>
                <i
                  className="devicon-css3-plain colored"
                  aria-hidden="true"
                ></i>
                <p>css</p>
              </div>
            </div>
            <div className={estilos.contenedorbotones}>
              <button className={estilos.botonDemo} type="button">
                <img src="/exterior (1).png" alt="" />
                proximamente
              </button>
              <button className={estilos.botonCodigo} type="button">
                proximamente
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Proyectos;
