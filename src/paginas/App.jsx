// Importa React para poder usar JSX
import React from 'react';

// Importa componentes de React Router para definir rutas
import { Route, Routes } from 'react-router-dom';

// Importa el encabezado que se mostrará en todas las páginas
import { Header } from './Home/Components/Header';

// Importa el pie de página que se mostrará en todas las páginas
import { Footer } from './Home/Components/Footer';

// Importa la página principal (inicio)
import { Home } from './Home/Home';

// Importa la página de destinos turísticos
import Destinos from './Destinos/Destinos';

// Importa la página de experiencias
import { Experiencias } from './Experiencias/Experiencias';

// Importa la página de contacto
import { Contactenos } from './Contactenos/Contactenos';

// Componente principal de la aplicación
export const App = () => {
  return (
    <>
      {/* Encabezado común en todas las páginas */}
      <Header />

      {/* Define las rutas de navegación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página de destinos */}
        <Route path="/destinos" element={<Destinos />} />

        {/* Ruta para la página de experiencias */}
        <Route path="/experiencias" element={<Experiencias />} />

        {/* Ruta para la página de contacto */}
        <Route path="/contacto" element={<Contactenos />} />
      </Routes>

      {/* Pie de página común en todas las páginas */}
      <Footer />
    </>
  );
}