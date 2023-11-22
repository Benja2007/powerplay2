// DetallesJuego.js
import React from "react";
import { useParams } from "react-router-dom";

const DetallesJuego = () => {
  const { titulo } = useParams();

  // Replace this with your actual data or fetch it from an API
  const juegos = [
    {
      titulo: "Minecraft",
      imagen: "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
      descripcion: "Minecraft es un juego de construcción...",
      informacion: "Desarrollador: Mojang | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://www.minecraft.net/",
        plataforma2: "https://www.microsoft.com/",
      },
    },
    // Add more game details as needed
  ];

  const juego = juegos.find((juego) => juego.titulo === decodeURIComponent(titulo));

  if (!juego) {
    return <p>Juego no encontrado</p>;
  }

  return (
    <div>
      <h1>{juego.titulo}</h1>
      <img src={juego.imagen} alt={juego.titulo} />
      <p>{juego.descripcion}</p>
      <p>{juego.informacion}</p>
      <a href={juego.enlaces.plataforma1} target="_blank" rel="noopener noreferrer">
        Plataforma 1
      </a>
      <a href={juego.enlaces.plataforma2} target="_blank" rel="noopener noreferrer">
        Plataforma 2
      </a>
      {/* Add more links as necessary */}
    </div>
  );
};

export default DetallesJuego;
