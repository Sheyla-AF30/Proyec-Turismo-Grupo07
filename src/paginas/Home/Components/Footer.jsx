import React from 'react'
import './Footer.css'

const redes = [
  { id: 'fb', href: 'https://facebook.com', label: 'Facebook' },
  { id: 'ig', href: 'https://instagram.com', label: 'Instagram' },
  { id: 'tw', href: 'https://x.com', label: 'Twitter' },
  { id: 'yt', href: 'https://youtube.com', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer>
    <div className="footer-contenedor">
      <div className="footer-info">
        <h3>Turismo Perú</h3>
        <p>Descubre la magia de nuestra tierra, su cultura, historia y paisajes inolvidables.</p>
      </div>
      <div id="redes" className="footer-redes">
        {redes.map(({ id, href, label}) => (
          <a key={id} id={id} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
          {label}
          </a>
        ))}
      </div>
      <div className="footer-copy">
        <p>&copy; 2025 Viajes Perú. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  );
}
