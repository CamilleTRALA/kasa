import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (

    

    <div className="navbar">
      <div className="logo">
        <Link className="nav" to="/">
          <img src="../public/logo192.png" alt="logo" />
        </Link>
      </div>
      <div className="list-menu">
        <div className="nav-list">
          <Link className="nav" to="/">
            Accueil
          </Link>
        </div>
        <div className="navli">
          <Link className="nav" to="/a_propos">
            À propos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

