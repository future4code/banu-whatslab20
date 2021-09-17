import React, { useState } from "react";
import styled from "styled-components";

//LightTheme
import darkImg from "../img/iconLua.png";
import lightImg from "../img/iconSol.png";
import bg from "../img/whiteBg.gif";

//DarkTheme
import img from "../img/chat-wallpaper.png";


const SwitchTheme = styled.div`
grid-column: 4/5;
margin: 0 auto;
padding-right: 20px;

  img {
    height: 25px;
    width: 25px;
  }
`;

export default function Theme() {
  const [isDark, setIsDark] = useState(true);

  const lightColors = {
    body: "#D7DBD6",
    footer: "#bcbdbc",
    color: "#D7DBD6",
    background: bg,
    shadowColor: "none",
  };

  const darkColors = {
    body: "#141f29",
    footer: "#141f29",
    color: "#D7DBD6",
    background: img,
    shadowColor: "#203242",
  };

  const changeThemeLight = () => {
    setIsDark(!isDark);
    document.getElementById("body").style.backgroundColor = lightColors.body;
    document.getElementById("main").style.backgroundImage = `url(${lightColors.background})`;
    document.getElementById("main").style.boxShadow = lightColors.shadowColor;
    document.getElementById("footer").style.backgroundColor = lightColors.footer;
    document.getElementById("footer").style.boxShadow = lightColors.shadowColor;
    document.getElementById("feedback").style.color = "#141f29";
  };

  const changeThemeDark = () => {
    setIsDark(!isDark);
    document.getElementById("body").style.backgroundColor = darkColors.body;
    document.getElementById("main").style.backgroundImage = `url(${darkColors.background})`;
    document.getElementById("main").style.boxShadow = darkColors.shadowColor;
    document.getElementById("footer").style.backgroundColor = darkColors.footer;
    document.getElementById("footer").style.boxShadow = darkColors.shadowColor;
  };



  return (
    <SwitchTheme onClick={isDark ? changeThemeLight : changeThemeDark}>
      <img src={isDark ? lightImg : darkImg} alt="alterar tema" />
    </SwitchTheme>
  );
}
