import React from "react";
import styled from 'styled-components';
import Whatsapp from '../img/whatsapp.png';

const ContainerHeader = styled.div`
  background-color: #42c0a6;
  color: antiquewhite;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

`;

 const HeaderImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  margin-left: 20px;
 `;

class Header extends React.Component {
    render() {
      return (
        <ContainerHeader>
            <HeaderImg src={Whatsapp} alt="icone" />
            <h2>{this.props.Titulo}</h2>
        </ContainerHeader>
      );
    }
  }
  
  export default Header;