import React, { useState, useEffect } from "react";
import './Experiencias.css';

const experienciasData = [
  {
    titulo: "Museos",
    imagenes: ["/img/museo1.jpg", "/img/museo2.jpg"],
    descripcion: `Descubre la riqueza cultural del Perú en sus museos, con piezas arqueológicas, arte colonial y exposiciones modernas. 
    Perú ofrece una variedad de museos que ofrecen experiencias únicas y culturales. 
    Museo Larco, Museo de Sitio Pachacámac, Museo de Arte de Lima (MALI).`
  },
  {
    titulo: "Restaurantes",
    imagenes: ["/img/res1.png", "/img/res2.png"],
    descripcion: `La gastronomía peruana es reconocida mundialmente. Disfruta de una fusión de sabores en restaurantes tradicionales y gourmet.
    Perú es un destino gastronómico excepcional, con una rica herencia culinaria que incluye influencias indígenas, españolas, africanas, chinas y japonesas.
    Chefs renombrados como Virgilio Martínez y Gastón Acurio han elevado la cocina peruana a la fama mundial.`
  },
  {
    titulo: "Hoteles",
    imagenes: ["/img/hot1.png", "/img/hot2.png"],
    descripcion:`Desde hospedajes familiares hasta resorts de lujo, el Perú ofrece experiencias únicas para todos los viajeros.
    Belmond Miraflores Park: Con vistas al Océano Pacífico y servicios como spa y piscina. 
    Aranwa Sacred Valley Hotel & Wellness: Ubicado en el Valle Sagrado, con jardines y piscinas termales.`
  },
  {
    titulo: "Deportes",
    imagenes: ["/img/depo1.png", "/img/depo2.png"],
    descripcion: `Perú ofrece una variedad de deportes de aventura ideales para quienes buscan emociones intensas. 
    Escalada en roca, surf, senderismo, parapente, sandboarding, y mucho más.`
  }
];

export const Experiencias = () => {
  const [index, setIndex] = useState(0);

  // Función para avanzar o retroceder
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % experienciasData.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? experienciasData.length - 1 : prev - 1
    );
  };

  // Cambio automático cada 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experiencias" className="bloque seccion">
      <h2>Experiencias</h2>
      <ul>
        <li>
        Viajar en uno de los trenes más altos del mundo, explorando antiguos reinos y visitando maravillas desde el amanecer hasta el atardecer.
        Despertar a los pies de la Ciudad Sagrada. Descansar en los hoteles más exclusivos.
      </li>
      <li>
        Navegar el río Amazonas, una experiencia irrepetible. Aventura por tierra, mar y aire.
        Explorar el Cañón del Colca hasta llegar al centro de la ciudad de Arequipa, patrimonio mundial de la UNESCO.
      </li>
      <li>
        Llegar a Machu Picchu a bordo del inolvidable Hiram Bingham, un ferrocarril que conserva la estética de los vagones de los años 20.
        Disfrutar de panoramas para todos los gustos, desde el desierto hasta el mar, pasando por el Amazonas.
      </li>
      </ul>

      <audio controls>
        <source src="/audio/miperu.mp3" type="audio/mp3" />
        Tu navegador no soporta audio.
      </audio>

      {/* Carrusel */}
      <div className="galeria-carrusel">
        <div className="carrusel-slide-experiencias">
          <div className="galeria-item">
            {experienciasData[index].imagenes.map((img, i) => (
              <img key={i} src={img} alt={experienciasData[index].titulo} />
            ))}
            <h3>{experienciasData[index].titulo}</h3>
            <p>{experienciasData[index].descripcion}</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};
