import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import "./App.css";

import MenuButton from "./components/views/Menubar/MenuButton";
import SidebarPage from "./components/views/SidebarPage/SidebarPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import MainPage from './components/views/MainPage/MainPage';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [xPosition, setXPosition] = useState(-20);
  const getXPosition = (xPosition) => {
    setXPosition(xPosition);
    console.log('app'+xPosition);
  }

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
      {/* <LoginPage/> */}
      <MenuButton xPosition={xPosition}/>
      <MainPage xPosition={xPosition}/>
      <SidebarPage width={20} getXPosition={getXPosition}/>
    </Wrapper>
  );
}

export default App;
