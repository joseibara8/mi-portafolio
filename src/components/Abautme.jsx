import estilos from "./abautme.module.css";

export const Abautme = () => {
  return (

    <>
    <div className={estilos.contenedor_abaut_me}>
    <div className={estilos.contenedor_abautme1}>
        <h3>Sobre mi</h3>
        <h2>¿Quien soy?</h2>
        <p>Tengo <strong>19 años</strong> y soy estudiante de <strong>Ingeniería en Sistemas</strong> en la <strong>UAS Mazatlán</strong>, apasionado por el desarrollo de software y la creación de aplicaciones web completas.<br /><br />

Me desempeño como <strong>desarrollador full-stack</strong>, con experiencia en el desarrollo tanto del <strong>frontend</strong> como del <strong>backend</strong>. Disfruto transformar ideas en soluciones funcionales, escalables y con una buena experiencia de usuario, utilizando tecnologías como <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express</strong> y <strong>PostgreSQL</strong>, entre otras.<br />

Siempre estoy aprendiendo nuevas tecnologías, mejorando mis habilidades y fortaleciendo mis buenas prácticas de desarrollo, como el uso de <strong>Git</strong>, el diseño de <strong>APIs</strong> y el manejo de <strong>bases de datos</strong>.<br /><br />

<strong>Busco nuevos retos y oportunidades</strong> que me permitan seguir creciendo como desarrollador, aportar valor en proyectos reales y formar parte de un equipo donde pueda aprender, colaborar y desarrollar soluciones de impacto.</p>
    </div>
    <div>
        <div className={estilos.contenedor_abautme2}>
            <div className={estilos.caja_refran}>
            <i className="fi fi-tr-bullseye-arrow"></i>
            <p>"la <strong>programacion</strong> no es solo escribir un <strong>codigo</strong> ,es resolver problemas y construir <strong>soluciones</strong> que hacen la vida mas facil"</p>
            </div>
        </div>
    </div>

    </div>
    </>
  )

  
}
export default Abautme;
