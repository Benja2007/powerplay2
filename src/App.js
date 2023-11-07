import React from "react";
import './styles.css'
function App() {
  return (
    <div className="App">
      <h1>PowerPlay</h1>
      <div className="search-bar">
        <input type="text" placeholder="Buscar videojuegos" />
        <button type="submit">Buscar</button>
      </div>
    </div>
  );
}

export default App;
