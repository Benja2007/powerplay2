import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import fondo1 from "./imagenes/imagen2.jpg";
import videoLogo from "./imagenes/logo.mp4";
import Juegos from "./Juegos"; // Importa el componente Juegos

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (storedUser) {
      setIsRegistered(true);
    }
  }, []);

  const authenticate = () => {
    if (isRegistered) {
      const storedUser = localStorage.getItem("currentUser");

      if (storedUser) {
        const storedPassword = JSON.parse(storedUser).password;

        if (password === storedPassword) {
          onLogin();
        } else {
          alert("Contraseña incorrecta. Intenta de nuevo.");
        }
      }
    } else {
      localStorage.setItem("currentUser", JSON.stringify({ username, password }));
      setIsRegistered(true);
      alert("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
    }
  };

  const renderContent = () => {
    if (isRegistered) {
      return (
        <>
          <h1>Iniciar Sesión</h1>
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
          <p>
            ¿No tienes cuenta?{" "}
            <button
              style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setIsRegistered(false)}
            >
              Regístrate
            </button>
          </p>
        </>
      );
    } else {
      return (
        <>
          <h1>Registrarse</h1>
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
          <button onClick={authenticate}>Registrarse</button>
        </>
      );
    }
  };

  return (
    <Router>
      <div
        className="login"
        style={{
          backgroundImage: `url(${fondo1})`,
          height: "96vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "300px",
            borderRadius: "50%"
          }}
        >
          <source src={videoLogo} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
        {renderContent()}
      </div>
      {/* Configura las rutas */}
      <Routes>
        {/* Redirige a /juegos después de iniciar sesión */}
        <Route
          path="/"
          element={<Navigate to="/juegos" />}
        />
        {/* Ruta de juegos */}
        <Route
          path="/juegos"
          element={<Juegos />}
        />
      </Routes>
    </Router>
  );
};

export default Login;
