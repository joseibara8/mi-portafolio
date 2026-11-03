import estilos from "./abautme.module.css";

export const Abautme = () => {
  return (
    <>
      <div id="sobre-mi" className={estilos.contenedor_abaut_me}>
        <div className={estilos.contenedor_abautme1}>
          <div className={estilos.contenedorIconoTitulo}>
            <i className="fi fi-rr-user"></i>
            <h3>Sobre mi</h3>
          </div>

          <h2>
            ¿Quien <strong>soy?</strong>
          </h2>
          <p>
            Tengo <strong>19 años</strong> y soy estudiante de{" "}
            <strong>Ingeniería en Sistemas</strong> en la{" "}
            <strong>UAS Mazatlán</strong>, apasionado por el desarrollo de
            software y la creación de aplicaciones web completas.
            <br />
            <br />
            Me desempeño como <strong>desarrollador full-stack</strong>, con
            experiencia en el desarrollo tanto del <strong>frontend</strong>{" "}
            como del <strong>backend</strong>. Disfruto transformar ideas en
            soluciones funcionales, escalables y con una buena experiencia de
            usuario, utilizando tecnologías como <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>Express</strong> y <strong>PostgreSQL</strong>, entre otras.
            <br />
            Siempre estoy aprendiendo nuevas tecnologías, mejorando mis
            habilidades y fortaleciendo mis buenas prácticas de desarrollo, como
            el uso de <strong>Git</strong>, el diseño de <strong>APIs</strong> y
            el manejo de <strong>bases de datos</strong>.<br />
            <br />
            <strong>Busco nuevos retos y oportunidades</strong> que me permitan
            seguir creciendo como desarrollador, aportar valor en proyectos
            reales y formar parte de un equipo donde pueda aprender, colaborar y
            desarrollar soluciones de impacto.
          </p>
        </div>
        <div className={estilos.contenedor_abautme2}>
          <div className={estilos.contenedorTexto}>
            <div className={estilos.contenedorIconoTitulo}>
              <i className="fi fi-rr-layers"></i>
              <h5>Tecnologias</h5>
            </div>

            <h2>
              Herramientas y <strong>Tecnologias</strong>
            </h2>
            <p>
              Estas son algunas de las tecnologias con las que eh trabajado o
              las sigo aprendiendo
            </p>
          </div>

          <div>
            <div className={estilos.frontendTitulo}>
              <i className="fi fi-rr-screen"></i>
              <h3>Frontend</h3>
            </div>
            <div className={estilos.iconosFrontend}>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-html5-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>html</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-css3-plain colored  ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>css</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-javascript-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>javascript</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-react-original colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>react</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={` devicon-nextjs-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>next</p>
              </div>
            </div>    
          </div>
          <div>
            <div className={estilos.frontendTitulo}>
              <i className="fi fi-rr-database"></i>
              <h3>Backend</h3>
            </div>
            <div className={estilos.iconosFrontend}>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-nodejs-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>node</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-express-original colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>express</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-postgresql-plain colored  ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>postgresql</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-mysql-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>mysql</p>
              </div>
            </div>
          </div>
          <div>
            <div className={estilos.frontendTitulo}>
              <i className="fi fi-rr-wrench-alt"></i>
              <h3>Herramientas y Despliegue</h3>
            </div>
            <div className={estilos.iconosFrontend}>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-git-plain colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>git</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-docker-plain colored  ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>docker</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <i
                  className={`devicon-vercel-original colored ${estilos.iconoTecnologia}`}
                  aria-hidden="true"
                ></i>
                <p>vercel</p>
              </div>
              <div className={estilos.contenedorIconosFrontend}>
                <svg
                  className={estilos.iconoNeon}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <title>Neon</title>
                  <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" />
                </svg>
                <p>neon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Abautme;
