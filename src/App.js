import React, { useState } from "react";
import "./styles.css";
import categorias from "./categorias";
import Juegos from "./Juegos"; // Importa el nuevo componente
import Login from "./Login";

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const search = () => {
    // Aquí puedes implementar la lógica de búsqueda según tus necesidades
    // Por ahora, simplemente agregaremos el término de búsqueda a la lista de elementos
    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  return (
    <div className="App">
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
      <ul className="results">
        {/* Aqui se mostrarán los resultados */}
      </ul>
      {/* Nuevo componente de juegos */}
      <Juegos />
      <ul className="item-list">
        <h2 className="categories">Categorías:</h2>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <div className="item-div">{categoria}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;