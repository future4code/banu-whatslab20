import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';
import GlobalStyle from '../styles/global';



export default function Principal() {
    return (
      
        <div>
          <GlobalStyle />
            <div className="page-container">
              <Header Titulo={"WhatsLab"} />
              <Main/>
              <Footer/>
            </div>
        </div>
    )
}
