import React from "react";
import PaperPlane from '../img/paper-plane.png'
import '../styles/footer-style.css'
import iconButton from "../img/paper-plane.png";
import iconChatLogo from "../img/whatsapp.png";

class Footer extends React.Component {
    render() {
      return (
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
                    handleChat(name, message);
                    incrementKey();
                    updateMessage("");
                  }}
                >
                  <img src={iconButton} alt="enviar" />
                </button>
              </div>
            </form>
        </footer>
      );
    }
  }
  
  export default Footer;