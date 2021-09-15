import React from "react";
import styled from "styled-components";
import img from '../img/chat-wallpaper.png'

const Main = styled.div`
  box-sizing: border-box;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  padding: 10px;

  ul {
    align-self: flex-end;
    width: 100%;
  }

  span {
    color: rgb(192, 190, 190);
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    position: fixed;
  }

  .container-de-bubbles {
    width: 25vw;
  }
`;

export default function MainComponent(props) {
  return <Main> {props.children} </Main>;
}
