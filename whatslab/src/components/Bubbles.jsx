import React from "react";
import "../styles/bubbles.css";

import { history } from "../js/chat";

export default function Bubbles(props) {
  return (
    <>
      {history.map((value) => {
        return (
          <div className='bubble'>
            <li key={props.nameKey}><strong>Nome: </strong>{value.nick}</li>
            <li key={props.msgKey}><strong>Mensagem: </strong>{value.text}</li>
          </div>
        );
      })}
    </>
  );
}
