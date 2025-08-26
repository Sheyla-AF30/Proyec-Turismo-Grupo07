// Importa React para poder usar JSX
import React from 'react';

// Importa el logo desde la carpeta pública o assets
import logo from '/img/logotipofinal1.png';

// Importa el video promocional de Perú
import videoMp4 from '/video/vid011.mp4';

// Importa los estilos CSS específicos para este componente
import './Main.css'

// Componente funcional que representa la sección principal de bienvenida
export const Main = () => {
  return (
    <section id="inicio" className="seccion activa">
      
      {/* Logo de la marca o campaña turística */}
      <div className="logo-inicio">
        <img src={logo} alt="Turismo Perú" />
      </div>

      {/* Texto de bienvenida y descripción */}
      <div className="texto-inicio">
        <h1>Conoce más de <span>PERÚ</span></h1> {/* Título principal con énfasis en "PERÚ" */}
        <h3>Descubre Perú</h3> {/* Subtítulo motivador */}
        <p>
          La persona que llega a Perú inicia un viaje que le permite involucrarse, descubrir y
          experimentar. En medio de vivencias, el Perú te invita a descubrir. Esa transformación
          es propiciada por su gente, sus tradiciones y paisajes únicos llenos de esplendor.
        </p> {/* Texto descriptivo que transmite la experiencia turística */}
      </div>

      {/* Contenedor del video promocional */}
      <div className="video-container">
        <video className="video-inicio" controls>
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}


