import React from 'react'
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';



export default function Principal() {
    return (
        <div className="page-container">
          <Header Titulo={"WhatsLab"} />

          <Main/>

          <Footer/>

        </div>
    )
}
