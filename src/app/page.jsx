import styles from "./globals.css";
import Navbar from "@/components/Navbar";
import Inicio from "@/components/Inicio";
import Abautme from "@/components/Abautme";
import Contacto from "@/components/Contacto";
import Proyectos from "@/components/Proyectos";

export default function Home() {

  return (
    <>
    <Navbar></Navbar>
    <Inicio></Inicio>
    <Proyectos></Proyectos>
    <Abautme></Abautme>
    <Contacto></Contacto>
    </>
  )

   
}
