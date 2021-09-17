import React from "react";
//import "../styles/bubbles.css";

import styled, { keyframes } from "styled-components";

import { history, deletMessage } from "../js/chat";
import DeleteMessage from "../components/DeleteMessage";

const animation = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }

`;

const Bubbles = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: fit-content;
  padding: 10px;
  margin: 10px 0 10px 50%;
  font-family: Arial, Helvetica, sans-serif;
  color: #1b1b1b;

  animation-name: ${animation};
  animation-duration: 0.5s;

  list-style: none;

  align-self: flex-end;

  background-color: #83f8e1a6;
  border-start-end-radius: 15px;
  border-start-start-radius: 15px;
  border-end-start-radius: 15px;

  &:hover{
    box-shadow: 5px 5px 5px #83f8e137;
    transition: all .3s;
  }

  b {
    color: #252525;
    
    hr{
      margin-top: 10px;
      opacity: .3;
    }
  }

  li{
    margin: 5px;
  }
`;

export default function BubblesComponent() {
  return (
    <>
      {history.map((value) => {
        return (
          <Bubbles key={value.listKey} id={value.listKey} onDoubleClick={(e) => {
            e.preventDefault();
            deletMessage(value.listKey);
          }}>
            <li>
              <b>
                <i>{value.nick}:</i>
                <hr />
              </b>
            </li>
            <li>{value.text}</li>
            <DeleteMessage clue={value.listKey} />
          </Bubbles>
        );
      })}
    </>
  );
}
