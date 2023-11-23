import React, { useState } from "react";
import "./styles.css";
import categorias from "./categorias";
import Juegos from "./Juegos"; // Importa el nuevo componente
import Login from "./Login";
import fondo from "./imagenes/imagen1.jpeg";

function App() {
  const fondoStyle = {
    backgroundImage: `url(${fondo})`, // Corrección en la línea que asigna la propiedad backgroundImage
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  };

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const search = () => {
    const busqueda = items.filter(item =>
      item.nombre.toLowerCase().includes(currentItem.toLowerCase())
      );
      setItems(busqueda);
    // Aquí puedes implementar la lógica de búsqueda según tus necesidades
    // En este caso, simplemente buscamos el item en la lista de items
    const item = items.find(item => item.name === currentItem);
    if (item) {
      alert(`¡Encontrado! ${item.name}`);
      } else {
        alert("¡No encontrado!");
        }
    // Por ahora, simplemente agregaremos el término de búsqueda a la lista de elementos
    setItems([...items, currentItem]);
    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  return (
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
      <ul className="results">
        {/* Aquí se mostrarán los resultados */}
      </ul>
      {/* Nuevo componente de juegos */}
      <Juegos />
    </div>
  );
}
export default App;