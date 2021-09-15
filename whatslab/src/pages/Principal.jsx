import React from "react";
import "../styles/principal.css";

import Bubbles from "../components/Bubbles";

import { useState } from "react";

import { handleChat } from "../js/chat";

import iconButton from "../img/paper-plane.png";
import iconChatLogo from "../img/whatsapp.png";

export default function Principal() {
  const [name, updateName] = useState("");
  const [message, updateMessage] = useState("");
  const [key, updateKey] = useState(0);

  const incrementKey = () => {
    updateKey(key + 1);
  };

  return (
    <div className="page-container">
      <header>
        <img src={iconChatLogo} alt="icone" />
        <h2>WhatsLab</h2>
      </header>
      <main>
        <ul>
        <Bubbles/>
        </ul>
        <span>{message === '' ? true: `${name} está digitando...`}</span>
      </main>
      <footer>
        <form action="" autoComplete="off">
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="nome"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              updateName(e.target.value);
            }}
          />
          <div className="area-de-mensagem">
            <input
              id="mensagem"
              name="mensagem"
              autoComplete="off"
              type="text"
              placeholder="Digite sua mensagem"
              value={message}
              onChange={(e) => {
                e.preventDefault();
                updateMessage(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (message === '' || name === ''){
                  alert("Mensagem e Nome não podem estar vazios")
                } else {
                  incrementKey();
                  handleChat(name, message, key);
                  updateMessage("");
                  console.log(key)
                }
              }}
            >
              <img src={iconButton} alt="enviar" />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}
