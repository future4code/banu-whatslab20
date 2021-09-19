import React from "react";
import styled from "styled-components";

import { deletMessage } from "../js/chat";

import img from "../img/trash-bin.svg";

const Delete = styled.div`
  width: 60px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;


    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      & :active {
        background-color: yellow;
        transition: all 0.5s;
      }
    

    div {
      margin-right: 30px;
    }
  }
`;

export default function DeleteMessage(props) {
  return (
    <Delete
      onClick={(e) => {
        e.preventDefault();
        deletMessage(props.clue);
      }}
    >
      <div>{props.time}</div>
      <img src={img} alt="apagar mensagem" />
    </Delete>
  );
}
