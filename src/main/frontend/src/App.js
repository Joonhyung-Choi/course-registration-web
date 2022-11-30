import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import ErrorModal from "./components/views/ErrorModal/ErrorModal";
import LoginPage from "./components/views/LoginPage/LoginPage";
import MainPage from "./components/views/MainPage/MainPage";
//import ManagePage from "./components/views/ManagePage/ManagePage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import NotFoundPage from "./components/views/NotFoundPage/NotFoundPage";
import { useRecoilState } from "recoil";
import { serverTimeState } from "./components/recoil/currentStates";
import axios from "axios";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

function App() {
  // server time
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  useEffect(() => {
    axios.get("/api/time").then((res) => {
      let time = res.data.split(":");
      time[2] = time[2].split(".")[0];
      const second =
        Number(time[2]) + Number(time[1]) * 60 + Number(time[0]) * 3600;
      setServerTimeG(second);
    });
    setInterval(async () => {
      setServerTimeG((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <ErrorModal />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mayo-main/*" element={<MainPage />} />
        <Route path="/mayo-admin/*" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;