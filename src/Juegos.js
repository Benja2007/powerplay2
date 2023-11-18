// Juegos.js
import React from "react";
import categorias from "./categorias"; // Asegúrate de importar el archivo de categorías

const juegos = [
  {
    titulo: "Minecraft",
    imagen: "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
  },
  {
    titulo: "League Of Legends",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UNYVC3MXWBCDZB63W6NLY4XG4U.jpg",
  },
  {
    titulo: "Fortnite",
    imagen: "https://cdn2.unrealengine.com/fortnite-chapter-4-og-overview-page-key-art-bg-1920x1080-1fbc3a1c0297.jpg"
  },
  // Agrega más juegos según sea necesario
];

const Juegos = () => {
  return (
    <div className="juegos-container">
      <div className="categorias">
        <h2>Categorías</h2>
        <ul className="item-list">
          {categorias.map((categoria, index) => (
            <li key={index}>{categoria}</li>
          ))}
        </ul>
      </div>
      <div className="juegos">
      <h2 className="juegos-tit">Juegos</h2>
        <div className="juego-list">
          {juegos.map((juego, index) => (
            <div key={index} className="juego-card">
              <img src={juego.imagen} alt={juego.titulo} />
              <p>{juego.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Juegos;