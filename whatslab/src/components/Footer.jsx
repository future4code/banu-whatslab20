import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  background-color: #141f29;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-shadow: 0 1px 10px #203242;

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 50%;
  }

  input {
    height: 40px;
    border-radius: 10px;
    text-align: center;
    border: none;
    outline: none;
  }

  .area-de-mensagem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 75%;
    border-radius: 10px;
    min-width: 300px;
  }
  #mensagem {
    width: 90%;
  }
  #nome {
    border-radius: 10px;
    width: 20%;
  }

  button {
    width: 50px;
    height: 40px;
    background-color: white;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: rgba(0, 0, 255, 0.185);
      transition: all 0.2s;
    }
    
    &:not(:hover) {
      transition: all 0.2s;
    }
  }

`;

export default function FooterComponent(props) {
  return <Footer>{props.children} </Footer>;
}
