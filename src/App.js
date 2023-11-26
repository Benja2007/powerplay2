import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css";
import categorias from "./categorias";
import Juegos from "./Juegos";
import DetallesJuego from "./DetallesJuegos";
import Login from "./Login";
import fondo from "./imagenes/imagenmov3.gif";

function App() {
  const fondoStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  };

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
            <div className="App" style={fondoStyle}>
              <h1 className="gradient-text">PowerPlay</h1>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Buscar videojuegos"
                  value={currentItem}
                  onChange={(e) => setCurrentItem(e.target.value)}
                />
                <button type="button" onClick={search}>
                  Buscar
                </button>
              </div>
              <ul className="results">{/* Aquí se mostrarán los resultados */}</ul>
              <Juegos/>
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
