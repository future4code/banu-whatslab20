import React from "react";
import "../styles/principal.css";

import iconButton from '../img/paper-plane.png'
import iconChatLogo from "../img/whatsapp.png"

export default function Principal() {
  return (
    <div className="page-container">
      <header>
        <img src={iconChatLogo} alt="icone" />
        <h2>WhatsLab</h2>
      </header>
      <main></main>
      <footer>
        <form action="">
          <input id="nome" type="text" placeholder="nome" />
          <div className="area-de-mensagem">
            <input
              id="mensagem"
              type="text"
              placeholder="Digite sua mensagem"
            />
            <button type="submit">
              <img src={iconButton} alt="enviar" />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}
