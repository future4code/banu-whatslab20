import React from "react";
import "../styles/bubbles.css";

import { history } from "../js/chat";
import DeleteMessage from "../components/DeleteMessage";


export default function Bubbles() {

  return (
    <>
      {history.map((value) => {
        return (
          <div className='bubble' key={value.listKey} id={value.listKey}>
            <li ><strong>Nome: </strong>{value.nick}</li>
            <li><strong>Mensagem: </strong>{value.text}</li>
            <DeleteMessage clue={value.listKey}/>
          </div>
        );
      })}
    </>
  );
}
