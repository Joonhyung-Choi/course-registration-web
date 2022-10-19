import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import LoginPage from "./components/views/LoginPage/LoginPage";
import MainPage from "./components/views/MainPage/MainPage";

const Wrapper = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
`;

function App() {

  return (
    <Wrapper>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/mayo-main/*" element={<MainPage />}/>
        </Routes>
    </Wrapper>
  );
}

export default App;
