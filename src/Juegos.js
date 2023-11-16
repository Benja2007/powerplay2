// Juegos.js
import React from "react";

const juegos = [
  {
    titulo: "Minecraft",
    imagen: "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
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
