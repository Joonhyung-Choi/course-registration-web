import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./components/views/LoginPage/LoginPage";
import UIPage from "./components/views/UIPage/UIPage";


function App() {
  const [userData,setUserData] = useState("");
  const setUserData_ = (userData) => {
    setUserData(userData);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<UIPage userData={userData}/>}></Route>
          <Route path="/" element={<LoginPage setUserData={setUserData_}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
