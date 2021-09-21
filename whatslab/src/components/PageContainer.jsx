import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    font-family: "Roboto", sans-serif;
    height: 90vh;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 9vh 1fr 12vh;
    margin-left: 10vw;
    margin-right: 10vw;
    box-shadow: 1px 1px 10px #a39d9d34;
  

  @media screen and (max-width: 589px) {
    .page-container {
      margin: 0;
      height: 95vh;
      grid-template-rows: 6vh 1fr 11vh;
    }
  }
`;
export default function PageContainerComponent(props) {
  return (

    <PageContainer>
       {props.children}
    </PageContainer>

  )
}
