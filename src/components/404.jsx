import React from "react";
import "./404.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="backhome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NoMatch;
