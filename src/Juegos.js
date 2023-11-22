// Juegos.js
import React, { useState } from "react";
import categorias from "./categorias";

const Juegos = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      descripcion: "Minecraft es un juego de construcción...",
      informacion: "Desarrollador: Mojang | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://www.minecraft.net/",
        plataforma2: "https://www.microsoft.com/",
        // Agrega más enlaces según sea necesario
      },
    },
    {
      titulo: "League Of Legends",
      imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UNYVC3MXWBCDZB63W6NLY4XG4U.jpg",
      descripcion: "League of Legends es un juego de...",
      informacion: "Desarrollador: Riot Games | Lanzamiento: 2009",
      enlaces: {
        plataforma1: "https://na.leagueoflegends.com/",
        plataforma2: "https://www.riotgames.com/",
      },
    },
    {
      titulo: "Fortnite",
      imagen: "https://cdn2.unrealengine.com/fortnite-chapter-4-og-overview-page-key-art-bg-1920x1080-1fbc3a1c0297.jpg",
      descripcion: "Fortnite es un juego de batalla real...",
      informacion: "Desarrollador: Epic Games | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://www.epicgames.com/fortnite/",
        plataforma2: "https://www.microsoft.com/",
      },
    },
  ];

  const toggleSubMenu = (category) => {
    setShowSubMenu(!showSubMenu);
    setSelectedCategory(category);
  };

  const openGameDetails = (juego) => {
    const nuevaPestana = window.open("", "_blank");
    nuevaPestana.document.write(`
      <h1>${juego.titulo}</h1>
      <img src="${juego.imagen}" alt="${juego.titulo}" />
      <p>${juego.descripcion}</p>
      <p>${juego.informacion}</p>
      <a href="${juego.enlaces.plataforma1}" target="_blank">Plataforma 1</a>
      <a href="${juego.enlaces.plataforma2}" target="_blank">Plataforma 2</a>
      <!-- Agrega más enlaces según sea necesario -->
    `);
    nuevaPestana.document.close();
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
          {juegos.map((juego, index) => (
            <div
              key={index}
              className="juego-card"
              onClick={() => openGameDetails(juego)}
            >
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
