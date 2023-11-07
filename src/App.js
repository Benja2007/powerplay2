import React, { useState } from "react";
import './styles.css'

function App() {
  // Estado para almacenar los elementos de la lista
  const [items, setItems] = useState([]);
  // Estado para almacenar el elemento actual que se está escribiendo
  const [currentItem, setCurrentItem] = useState("");

  // Función para manejar la adición de un elemento a la lista
  const addItem = () => {
    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  return (
    <div className="App">
      <h1>PowerPlay</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar videojuegos"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        />
        <button type="submit" onClick={addItem}>
          Agregar
        </button>
      </div>
      <h2>Lista de elementos:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;