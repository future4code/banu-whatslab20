import React from "react";
import '../styles/header-style.css'
import Whatsapp from '../img/whatsapp.png';


class Header extends React.Component {
    render() {
      return (
        <header>
            <img src={Whatsapp} alt="icone" />
            <h2>{this.props.Titulo}</h2>
        </header>
      );
    }
  }
  
  export default Header;