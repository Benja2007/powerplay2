import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const correctPassword = "trini";

  const authenticate = () => {
    if (password === correctPassword) {
      onLogin();
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <div className="login">
      <h1>Iniciar Sesion</h1>
      <input 
      type="text"
      placeholder="Usuario"
      />
      <input
      value={password}
      onChange={e=>setPassword(e.target.value)}
      type="password"
      placeholder="Contraseña"
      />
      <button onClick={authenticate}>Enviar</button>
      </div>
      /*<label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={authenticate}>
        Iniciar sesión
      </button>
    </div>*/
  );
};

export default Login;
