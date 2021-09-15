import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #42c0a6;
  color: antiquewhite;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export default function HeaderComponent(props) {
  return <Header> {props.children} </Header>;
}
