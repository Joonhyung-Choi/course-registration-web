import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { serverTimeState } from "./components/recoil/currentStates";
import styled from "styled-components";
import "./App.css";
import ErrorModal from "./components/views/ErrorModal/ErrorModal";
import LoginPage from "./components/views/LoginPage/LoginPage";
import MainPage from "./components/views/MainPage/MainPage";
import ManagePage from "./components/views/ManagePage/ManagePage";
import NotFoundPage from "./components/views/NotFoundPage/NotFoundPage";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

function App() {
  // serverTime
  // const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  //  useEffect(async () => {
  //    await axios.get("api/time").then((res) => {
  //      setServerTimeG(res.data);
  //    });
  //    setInterval(async () => {
  //      await axios.get("api/time").then((res) => {
  //        setServerTimeG(res.data);
  //          console.log(res.data);
  //      });
  //    }, 1000);
  //  }, []);

  return (
    <Wrapper>
      <ErrorModal />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mayo-main/*" element={<MainPage />} />
        <Route path="/mayo-manage" element={<ManagePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
