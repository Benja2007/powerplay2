import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css";
import categorias from "./categorias";
import Juegos from "./Juegos";
import DetallesJuego from "./DetallesJuegos";
import SearchBar from './SearchBar';
import fondo from "./imagenes/imagenmov3.gif";
import video from "./imagenes/PP.mp4";
import fondoAlternativo from "./imagenes/navidad.gif"; // Importa tu otro fondo
import musica from "./imagenes/navidad.mp3"; 

function App() {
  const [fondoActual, setFondoActual] = useState(fondo);
  const [playing, setPlaying] = useState(false);

  const fondoStyle = {
    backgroundImage: `url(${fondoActual})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  };

  const cambiarFondo = () => {
    // Cambia entre los fondos
    const nuevoFondo = fondoActual === fondo ? fondoAlternativo : fondo;
    setFondoActual(nuevoFondo);
    setPlaying(true);
    setTimeout(() => {
      setPlaying(false);
    }, 60000);
  };
  useEffect(() => {
    const audio = new Audio(musica);

    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playing]);


  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const search = () => {
    const busqueda = items.filter((item) =>
      item.nombre.toLowerCase().includes(currentItem.toLowerCase())
    );
    setItems(busqueda);

    const item = items.find((item) => item.name === currentItem);
    if (item) {
      alert(`¡Encontrado! ${item.name}`);
    } else {
      alert("¡No encontrado!");
    }

    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  const toggleSubMenu = (category) => {
    setShowSubMenu(!showSubMenu);
    setSelectedCategory(category);
  };
  
  const subcategorias = {
    Acción: ["Aventura Acción", "Disparos", "Luchas"],
    Aventura: ["Aventura Gráfica", "Mundo Abierto"],
    Estrategia: ["Estrategia en Tiempo Real", "Estrategia por Turnos"],
    Deportes: ["Fútbol", "Baloncesto", "Automovilismo"],
    Rol: ["RPG de Acción", "RPG por Turnos"],
    Simulacion: ["Simulación de Vida", "Simulación de Negocios"],
    // Agrega más subcategorías según sea necesario
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/juegos"
          element={(
           <div className="App-container">
            <div className="App" style={fondoStyle}>
              <video className="video-clase"
                autoPlay
                loop
                muted
                src={video[0].src}
                type="video/mp4"
                id="myVideo" 
                >
                <source src={video} type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video>
              <h1 className="gradient-text">PowerPlay</h1>
              <button onClick={cambiarFondo}>Cambiar Fondo</button>
              
              {/* agregue las categorias desde los juegos al app*/}
    
              <div className="search-bar">
              </div>
              <ul className="results">{/* Aquí se mostrarán los resultados */}</ul>
              <Juegos/>
            </div>
           </div>
          )}
        />
        <Route
          path="/juegos"
          element={<Navigate to="/juegos/:id" />}
        />
        <Route 
        path="/juegos/:id" 
        element={<DetallesJuego />} />
      </Routes>
    </Router>
  );
}

export default App;
