import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

import MenuButton from "./components/views/Menubar/MenuButton";
import SidebarPage from "./components/views/SidebarPage/SidebarPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import MainPage from "./components/views/MainPage/MainPage";
import RegistPage from "./components/views/RegistPage/RegistPage";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;

function App() {
  // loginPage
  const [isLogin,setIsLogin] = useState(false);
  const getIsLogin = (isLogin) => {
    setIsLogin(isLogin);
  };

  // sidebar 크기 조절
  const [xPosition, setXPosition] = useState(-20);
  const getXPosition = (xPosition) => {
    setXPosition(xPosition);
  };

  // const [hello, setHello] = useState('')

  //   useEffect(() => {
  //       axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  //   }, []);

  //   return (
  //       <div>
  //           백엔드에서 가져온 데이터입니다 : {hello}
  //       </div>
  //   );

  return (
    <Wrapper>
      {isLogin ? (
        <>
          <MenuButton xPosition={xPosition} />
          {/* <MainPage xPosition={xPosition}/> */}
          <RegistPage xPosition={xPosition} />
          {/* SidebarPage width 줄이면 MainPage랑 MenuButton의 xNum도 꼭 맞춰서 수정해주기! */}
          <SidebarPage width={20} getXPosition={getXPosition} />
        </>
      ) : (
        <LoginPage getIsLogin={getIsLogin} />
      )}
    </Wrapper>
  );
}

export default App;
