import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import LoginPage from "./components/views/LoginPage/LoginPage";
import UIPage from "./components/views/UIPage/UIPage";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [userData, setUserData] = useState("");
  const setUserData_ = (userData) => {
    setUserData(userData);
  };

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<UIPage userData={userData} />}></Route>
          <Route
            path="/"
            element={<LoginPage setUserData={setUserData_} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
