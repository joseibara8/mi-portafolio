import styles from "./globals.css";
import Navbar from "@/components/Navbar";
import Inicio from "@/components/Inicio";
import Abautme from "@/components/Abautme";
import Contacto from "@/components/Contacto";

export default function Home() {

  return (
    <>
  <Navbar></Navbar>
    <Inicio></Inicio>
    <Abautme></Abautme>
    <Contacto></Contacto>
    
    </>
  )

   
}
