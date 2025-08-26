import React, { useState, useEffect, useRef } from 'react';

import './Destinos.css'

const destinosData = [
  {
    img: '/img/huaraz.webp',
    titulo: 'Huaraz',
    descripcion: 'Huaraz es una ciudad en la cordillera de los Andes del oeste de Perú. Es la capital de la región de Ancash y se ubica en el valle Callejón de Huaylas.'
  },
  {
    img: '/img/huancaya.jpeg',
    titulo: 'Huancaya',
    descripcion: 'Huancaya es uno de los 33 distritos que conforman la provincia de Yauyos, ubicada en el departamento de Lima, en el Perú.'
  },
  {
    img: '/img/iquitos.jpeg',
    titulo: 'Iquitos',
    descripcion: 'Iquitos es una ciudad portuaria peruana y la capital de la región de Loreto. Es la ciudad más grande de la Amazonía peruana.'
  },
  {
    img: '/img/lineas de nazca.webp',
    titulo: 'Líneas de Nazca',
    descripcion: 'Las líneas de Nazca son antiguos geoglifos que se encuentran en las pampas de Jumana, en el desierto de Nazca, entre las poblaciones de Nazca y Palpa.'
  },
  {
    img: '/img/montaña de colores.jpg',
    titulo: 'Montaña de 7 Colores',
    descripcion: 'La montaña de los siete colores, también conocida como Vinicunca o Arcoíris, es una montaña del Perú con una altitud de 5.200 msnm.'
  },
  {
    img: '/img/oxapampa.jpg',
    titulo: 'Oxapampa',
    descripcion: 'Oxapampa es una ciudad peruana, capital del distrito y de la provincia homónimos en el departamento de Pasco.'
  }
];

function Destinos() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null); // ✅ Reemplaza document.querySelector

  const slides = [destinosData[destinosData.length - 1], ...destinosData, destinosData[0]];

  const nextSlide = () => {
    if (currentIndex >= destinosData.length + 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (!transitionEnabled) {
      setTransitionEnabled(true);
    }
  }, [currentIndex]);

   // Manejo de transición infinita
  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    const transitionEndHandler = () => {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(destinosData.length);
      }

      if (currentIndex === destinosData.length + 1) {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }
    };
     sliderElement.addEventListener('transitionend', transitionEndHandler);

    return () => {
      sliderElement.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [currentIndex, destinosData.length]);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className="destinos" id="destinos">
      <h2 className="subtitulos">DESTINOS</h2>
      <div className="contenido-depos">
        <div 
          className="depos" 
           ref={sliderRef} // ✅ usamos ref en lugar de querySelector
          style={{
            transform: `translateX(-${ currentIndex * 100 } % )`,
            transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {slides.map((destino, index) => (
            <div className="depo" key={destino.titulo || index}>
              <div className="depo-img">
                <img src={destino.img} alt={destino.titulo} />
              </div>
              <div className="depo-info">
                <h3>{destino.titulo}</h3>
                <p>{destino.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-depos">
          <button id="btn-izq" onClick={prevSlide}>&lt;</button>
          <button id="btn-der" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Destinos;