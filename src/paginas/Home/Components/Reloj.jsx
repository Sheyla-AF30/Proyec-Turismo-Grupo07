// Importa los hooks useEffect y useState desde React
import { useEffect, useState } from 'react';

// Importa los estilos CSS específicos para el reloj
import './Reloj.css'

// Componente funcional que muestra la hora y la fecha actual
export default function Reloj() {
  // Estado para guardar la hora actual como string
  const [hora, setHora] = useState('');

  // Estado para guardar la fecha actual como string
  const [fecha, setFecha] = useState('');

  // useEffect se ejecuta una vez al montar el componente
  useEffect(() => {
    // Función auxiliar para asegurar que los números tengan dos dígitos
    const dos = (n) => n.toString().padStart(2, '0');

    // Función que actualiza la hora y la fecha
    const tick = () => {
      const d = new Date(); // Obtiene la fecha y hora actual
      setFecha(`${dos(d.getDate())}/${dos(d.getMonth() + 1)}/${d.getFullYear()}`); // Formato DD/MM/YYYY
      setHora(`${dos(d.getHours())}:${dos(d.getMinutes())}:${dos(d.getSeconds())}`); // Formato HH:MM:SS
    };

    tick(); // Ejecuta una vez al inicio para mostrar la hora inmediatamente

    const id = setInterval(tick, 1000); // Actualiza cada segundo

    return () => clearInterval(id); // Limpia el intervalo al desmontar el componente
  }, []);

  // Renderiza el reloj en pantalla
  return (
    <div id="reloj" className="reloj-bar">
      <span className="hora">Hora: {hora}</span>
      <span className="fecha">Fecha: {fecha}</span>
    </div>
  );
}