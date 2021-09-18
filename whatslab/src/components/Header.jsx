import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #42c0a6;
  color: antiquewhite;
  display: grid;
  grid-template-columns: 50px 100px 1fr 50px;
//  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

  img {
    width: 24px;
    height: 24px;
    margin: 0 auto
  }
`;

export default function HeaderComponent(props) {
  return (
    <Header>

      {props.children}
    </Header>
  );
}
