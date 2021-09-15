import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  .page-container {
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-rows: 5vw 73vh 5vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 100%;
    box-shadow: 1px 1px 10px #a39d9d34;
  }
`;
export default function PageContainerComponent(props) {
  return (
      <PageContainer> {props.children}</PageContainer>
  )
}
