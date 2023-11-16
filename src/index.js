import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return loggedIn ? <App /> : <Login onLogin={handleLogin} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);