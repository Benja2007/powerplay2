import React, { useState } from "react";
import fondo1 from "./imagenes/imagen2.jpg";
import videoLogo from "./imagenes/logo.mp4";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const correctPassword = "trini"; // Contraseña por defecto (puedes cambiarla o eliminarla)

  const authenticate = () => {
    // Verificar si el usuario ya está registrado en Local Storage
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
      const storedPassword = JSON.parse(storedUser).password;

      if (password === storedPassword) {
        onLogin();
      } else {
        alert("Contraseña incorrecta. Intenta de nuevo.");
      }
    } else {
      // Registrar al usuario en Local Storage
      localStorage.setItem(username, JSON.stringify({ password }));
      alert("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
    }
  };

  return (
    <div className="login" style={{ 
      backgroundImage: `url(${fondo1})`, 
      height: "96vh",
      width: "100%",
      backgroundRepeat: "no-repeat", 
      backgroundSize: "cover", 
      backgroundAttachment: "fixed" 
      }}>
         <video
        autoPlay
        muted
        loop
        style={{
          width: "300px", // Ajusta el tamaño según tus necesidades
          borderRadius: "50%", // O cualquier otro estilo que desees
        }}
      >
        <source src={videoLogo} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      
      <h1>Iniciar Sesión o Registrarse</h1>
      <input 
        type="text" 
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
      />
      <button onClick={authenticate}>Enviar</button>
    </div>
  );
};

export default Login;
