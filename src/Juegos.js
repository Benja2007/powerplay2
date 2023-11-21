// Juegos.js
import React, { useState } from "react";
import categorias from "./categorias"; // Asegúrate de importar el archivo de categorías

const Juegos = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Define las subcategorías para cada categoría
  const subcategorias = {
    Acción: ["Aventura Acción", "Disparos", "Luchas"],
    Aventura: ["Aventura Gráfica", "Mundo Abierto"],
    Estrategia: ["Estrategia en Tiempo Real", "Estrategia por Turnos"],
    Deportes: ["Fútbol", "Baloncesto", "Automovilismo"],
    Rol: ["RPG de Acción", "RPG por Turnos"],
    Simulacion: ["Simulación de Vida", "Simulación de Negocios"],
    // Agrega más subcategorías según sea necesario
  };

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

  const toggleSubMenu = (category) => {
    setShowSubMenu(!showSubMenu);
    setSelectedCategory(category);
  };

  return (
    <div className="juegos-container">
      <div className="categorias">
        <h2>Categorías</h2>
        <ul className="item-list">
          {categorias.map((categoria, index) => (
            <li key={index} onClick={() => toggleSubMenu(categoria)}>
              {categoria}
              {showSubMenu && selectedCategory === categoria && (
                <ul className="subcategorias">
                  {/* Muestra las subcategorías de la categoría seleccionada */}
                  {subcategorias[categoria].map((subcategoria, subIndex) => (
                    <li key={subIndex}>{subcategoria}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="juegos">
        <h2 className="juegos-tit">Juegos</h2>
        <div className="juego-list">
          {/* Muestra los juegos */}
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
