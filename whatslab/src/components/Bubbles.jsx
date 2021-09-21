//import "../styles/bubbles.css";

import styled, { keyframes } from "styled-components";

import { history, deletMessage } from "../js/chat";
import DeleteMessage from "../components/DeleteMessage";

const animationEntering = keyframes`
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
  font-family: Arial, Helvetica, sans-serif;
  color: #1b1b1b;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0 10px 70%;

  animation-name: ${animationEntering};
  animation-duration: 0.5s;
  
  list-style: none;

  background-color: #83f8e1a6;
  border-start-end-radius: 15px;
  border-start-start-radius: 15px;
  border-end-start-radius: 15px;

  &:hover {
    box-shadow: 5px 5px 5px #83f8e137;
    transition: all 0.3s;
  }

  @media screen and (max-width: 990px) {
    margin: 10px;
  }
`;

const BubbleSomeoneElse = styled(Bubbles)`
  background-color: #0a7c90;
  color: whitesmoke;
  margin: 10px 70% 10px 0;
  align-self: flex-start;
  border-end-start-radius: 0;
  border-end-end-radius: 15px;

  b {
    color: whitesmoke;
  }

  @media screen and (max-width: 990px) {
    margin: 10px;
  }
`;

export default function BubblesComponent() {
  return (
    <>
      {history.map((value) => {
        if (value.nick.toLowerCase() === "eu") {
          return (
            <Bubbles deleted
              key={value.listKey}
              id={value.listKey}
              onDoubleClick={(e) => {
                e.preventDefault();
                deletMessage(value.listKey);
              }}
            >
              <li>{value.text}</li>
              <DeleteMessage clue={value.listKey} time={value.time} />
            </Bubbles>
          );
        } else {
          return (
            <BubbleSomeoneElse
              key={value.listKey}
              id={value.listKey}
              onDoubleClick={(e) => {
                e.preventDefault();
                deletMessage(value.listKey);
              }}
            >
              <li>
                <b>
                  <i>{value.nick}:</i>
                </b>
              </li>

              <li>{value.text}</li>
              <DeleteMessage clue={value.listKey} time={value.time} />
            </BubbleSomeoneElse>
          );
        }
      })}
    </>
  );
}
