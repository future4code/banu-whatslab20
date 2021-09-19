import React from "react";
import styled from "styled-components";
import img from "../img/chat-wallpaper.png";

const Main = styled.div`
  box-sizing: border-box;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  grid-row: 2/3;

  ul {
    width: 100%;
    margin-bottom: 15px;
    display: block;
    height: fit-content;
  }

  span {
    color: rgb(192, 190, 190);
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    position: absolute;
    bottom: 22vh;
  }

  .container-de-bubbles {
    width: 25vw;
  }

  @media screen and (max-width: 589px) {
    span {
      position: absolute;
      bottom: 17vh;
    }
  }
`;

export default function MainComponent(props) {
  return <Main id="main">{props.children}</Main>;
}
