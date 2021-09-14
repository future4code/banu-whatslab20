import React from "react";


class Footer extends React.Component {
    render() {
      return (
        <div>
            <form action="">
              <input id="nome" type="text" placeholder="nome" />
              <div class="area-de-mensagem">
                <input
                  id="mensagem"
                  type="text"
                  placeholder="Digite sua mensagem"
                />
                <button type="submit">
                  <img src="img/paper-plane.png" alt="enviar" />
                </button>
              </div>
            </form>
        </div>
      );
    }
  }
  
  export default Footer;