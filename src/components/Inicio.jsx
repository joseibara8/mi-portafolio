import estilos from "./inicio.module.css";
export const Inicio = () => {
  return (
    <>
      <div id="inicio" className={estilos.contenedorInicio}>
        <div className={estilos.contenedorTextoInicial}>
          <h9>Hola, yo soy</h9>
          <h2>jose Benjamin</h2>
          <p>
            Tengo 20 años y me apasiona la tecnologia. Me enfoco en crear aplicaciones web modernas y funcionales, siempre buscando aprender algo nuevo y mejorar cada dia.
          </p>
          <button className={estilos.boton_cv}>descargar cv</button>
            </div>

            <div className={estilos.contenedorImagen}>
          <img className={estilos.imagen} src="/jose.jpeg" alt="Jose Ibarra" />
          <div className={estilos.contenedorIconos}>
            <i  className="fi fi-rr-calendar" aria-hidden="true">
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
