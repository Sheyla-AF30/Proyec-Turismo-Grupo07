// Importa React para poder usar JSX
import React from 'react'

// Importa el componente principal de contenido
import { Main } from './Components/main'

// Importa el componente del reloj (probablemente muestra la hora actual)
import Reloj from './Components/Reloj'

// Componente funcional que representa la página de inicio
export const Home = () => {
  return (
    <> 
      {/* Sección que muestra el reloj */}
      <div>
        <Reloj />
      </div>

      {/* Sección que muestra el contenido principal */}
      <div>
        <Main />
      </div>
    </>
  )
}
   
