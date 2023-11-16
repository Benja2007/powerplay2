// Juegos.js
import React from "react";

const juegos = [
  {
    titulo: "Nombre del Juego 1",
    imagen: "URL de la imagen 1",
  },
  {
    titulo: "Nombre del Juego 2",
    imagen: "URL de la imagen 2",
  },
  // Agrega más juegos según sea necesario
];

const Juegos = () => {
  return (
    <div className="juegos">
      <h2>Juegos</h2>
      <div className="juego-list">
        {juegos.map((juego, index) => (
          <div key={index} className="juego-card">
            <img src={juego.imagen} alt={juego.titulo} />
            <p>{juego.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juegos;
