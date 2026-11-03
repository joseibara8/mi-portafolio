import estilos from "./contacto.module.css";

const Contacto = () => {
  return (
    <>
      <div id="contacto" className={estilos.contenedor}>
        <div className={estilos.contenedor1}>
          <div className={estilos.contenedorTexto}>
            <div className={estilos.titulo}>
              <i className="fi fi-rr-envelope"></i>
              <h5>Contacto</h5>
            </div>
            <h2>Hablemos</h2>
            <p>
              si te gustaria trabajar juntos o tienes una propuesta , no dudes
              en contactarme.
            </p>
          </div>
        </div>

        <div className={estilos.contenedor2}>
          <form action="">
            <div className={estilos.contenedorInputs}>
              <p>nombre</p>
              <input type="text" placeholder="Tu Nombre..." />
              <p>correo</p>
              <input type="email" placeholder="Tu Correo..." />
              <p>mensaje</p>
              <textarea
                name=""
                id=""
                placeholder="Tu Mensaje..."
                rows={3}
              ></textarea>
              <button type="submit">
                <i
                  className={`fi fi-rr-paper-plane ${estilos.iconoBoton}`}
                  aria-hidden="true"
                ></i>
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
        <div className={estilos.contenedor3}>
          <div className={estilos.contenedorEnlace}>
            <div className={estilos.enlaces}>
              <i className="fi fi-rr-envelope"></i>
              <div>
                <h4>correo</h4>
                <p>joseibarradev@gmail.com</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </div>
            <div className={estilos.enlaces}>
              <i className="fi fi-brands-github"></i>
              <div>
                <h4>github</h4>
                <p>joseibarra8</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </div>
            <div className={estilos.enlaces}>
              <i className="fi fi-brands-linkedin"></i>
              <div>
                <h4>correo</h4>
                <p>joseibarra</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
