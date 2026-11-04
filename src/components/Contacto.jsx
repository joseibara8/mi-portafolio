
"use client"
import { useState } from "react";
import estilos from "./contacto.module.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function enviarMensaje(e) {
    e.preventDefault();

    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        correo,
        mensaje,
      }),
    });

    const data = await res.json();

    alert(data.mensaje);
  }
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
              <input 
              type="text" 
              placeholder="Tu Nombre..."
              onChange={(e) => setNombre(e.target.value)}
               />
              <p>correo</p>

              <input
                type="email"
                placeholder="Tu Correo..."
                onChange={(e) => setCorreo(e.target.value)}
              />
              <p>mensaje</p>
              <textarea
                name=""
                id=""
                placeholder="Tu Mensaje..."
                rows={3}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
              <button 
              type="submit"
              onClick={(e) =>{
                enviarMensaje(e)
              }}>
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
                <p>joseibarraadev@gmail.com</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </div>
            <a
              className={estilos.enlaces}
              href="https://github.com/joseibara8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el perfil de GitHub de Jose Ibarra"
            >
              <i className="fi fi-brands-github"></i>
              <div>
                <h4>github</h4>
                <p>joseibarra8</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </a>
            <a
              className={estilos.enlaces}
              href="https://www.linkedin.com/in/jose-benjam%C3%ADn-ibarra-sanchez-324687318/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el perfil de LinkedIn de Jose Ibarra"
            >
              <i className="fi fi-brands-linkedin"></i>
              <div>
                <h4>LinkedIn</h4>
                <p>joseibarra</p>
              </div>
              <img src="/exterior (1).png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
