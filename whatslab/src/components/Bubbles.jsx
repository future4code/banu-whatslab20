import React from "react";
//import "../styles/bubbles.css";

import styled from "styled-components";

import { history } from "../js/chat";
import DeleteMessage from "../components/DeleteMessage";

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

  list-style: none;

  align-self: flex-end;

  background-color: #83f8e1a6;
  border-start-end-radius: 15px;
  border-start-start-radius: 15px;
  border-end-start-radius: 15px;
  

  b{
    color: #252525;
  }
`;

export default function BubblesComponent() {
  return (
    <>
      {history.map((value) => {
        return (
          <Bubbles key={value.listKey} id={value.listKey}>
            <li>
              <b>Nome: </b>
              {value.nick}
            </li>
            <li>
              <b>Mensagem: </b>
              {value.text}
            </li>
            <DeleteMessage clue={value.listKey} />
          </Bubbles>
        );
      })}
    </>
  );
}
