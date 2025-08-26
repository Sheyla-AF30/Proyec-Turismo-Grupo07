// Importa StrictMode para ayudar a detectar problemas potenciales en la aplicación
import { StrictMode } from 'react'

// Importa createRoot para crear el punto de entrada de la aplicación React
import { createRoot } from 'react-dom/client'

// Importa BrowserRouter para habilitar el enrutamiento con React Router
import { BrowserRouter } from 'react-router-dom'

// Importa el componente principal de la aplicación desde la carpeta 'paginas'
import { App } from './paginas/App'

// Crea la raíz de la aplicación y renderiza el componente App dentro de BrowserRouter y StrictMode
createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Habilita la navegación entre páginas sin recargar */}
    <StrictMode> {/* Ayuda a detectar errores y advertencias en desarrollo */}
      <App /> {/* Componente principal que contiene toda la lógica y estructura de la app */}
    </StrictMode>
  </BrowserRouter>
)
