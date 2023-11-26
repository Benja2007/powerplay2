import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import fondo1 from "./imagenes/fondomov1.gif";
import fondoAlternativo from "./imagenes/imagenmov4.gif";
import videoLogo from "./imagenes/logo.mp4";
import Juegos from "./Juegos"; // Importa el componente Juegos

const Login = ({ onLogin }) => {
  const [fondoActual, setFondoActual] = useState(fondo1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const cambiarFondo = () => {
    // Cambia entre los fondos
    const nuevoFondo = fondoActual === fondo1 ? fondoAlternativo : fondo1;
    setFondoActual(nuevoFondo);
  };

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
        <div className="login-text">
          <div
        className="login"
        style={{
          backgroundImage: `url(${fondoActual})`,
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
      </div>
          <div className="login-form">
          <div className="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="login-content">
            <h1>Iniciar Sesión</h1>
            <div className="field">
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
          </div>
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
          {/* Botón para cambiar el fondo */}
      <button onClick={cambiarFondo}>Cambiar Fondo</button>
          </div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="register-text">
          <div className="register-form">
          <div className="card1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="register-content">
          <h1>Registrarse</h1>
          <div className="field1">
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
          </div>
          <button onClick={authenticate}>Registrarse</button>
          </div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Router>
      <div
        className="login"
        style={{
          backgroundImage: `url(${fondo1})`,
          height: "100vh",
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
      </Routes>
    </Router>
  );
};

export default Login;
