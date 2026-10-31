import estilos from "./inicio.module.css";
export const Inicio = () => {
  return (
    <>
      <div className={estilos.contenedorInicio}>
        <div className={estilos.contenedorTextoInicial}>
          <h9>Hola, yo soy</h9>
          <h2>jose Ibarra</h2>
          <p>
            soy desarrollador web y de aplicaciones full stack, apasionado por
            la tecnologia y en constante buscqueda de nuevos retos
          </p>
          <button className={estilos.boton_cv}>descargar cv</button>
            </div>

            <div className={estilos.contenedorImagen}>
          <img className={estilos.imagen} src="/jose.jpeg" alt="Jose Ibarra" />
          <div className={estilos.contenedorIconos}>
            <i className="fi fi-sr-calendar" aria-hidden="true">
              <span className={estilos.span}>20 Años</span>
            </i>

            <i className="fi fi-rr-marker" aria-hidden="true">
              <span className={estilos.span}>Mazatlan sinaloa</span>
            </i>

            <i className="fi fi-rr-graduation-cap" aria-hidden="true">
              <span className={estilos.span}>Ingenieria en sistemas (uas)</span>
            </i>

            <i className="fi fi-rr-laptop-code" aria-hidden="true">
              <span className={estilos.span}>Full Stack Developer</span>
            </i>

            <i className="fi fi-rr-envelope-plus" aria-hidden="true">
              <span className={estilos.span}>
                Disponible para nuevas oportunidades
              </span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
