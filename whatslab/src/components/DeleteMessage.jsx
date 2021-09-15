import React from "react";
import styled from "styled-components";

import { deletMessage } from "../js/chat";

import img from "../img/trash-bin.png";

const Delete = styled.div`
  width: 18px;
  height: 18px;
  display: block;
  align-self: flex-end;

  button {
    width: 100%;
    height: 100%;
    background-color: #5caca0;

    & :hover {
      background-color: #28685e;
      transition: all 0.5s;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
      <button type="submit">
        <img src={img} alt="apagar mensagem" />
      </button>
    </Delete>
  );
}
