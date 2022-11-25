import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MenuButton from "../Menubar/MenuButton";
import SidebarPage from "../SidebarPage/SidebarPage";
import NoticePage from "../NoticePage/NoticePage";
import SearchCoursePage from "../SearchCoursePage/SearchCoursePage";
import PrevRegisterPage from "../PrevRegisterPage/PrevRegisterPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MyRegisterPage from "../MyRegisterPage/MyRegisterPage";

function MainPage() {
  // 새로고침 막기
  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  // sidebar 크기 조절
  const [xPosition, setXPosition] = useState(-350);
  const getXPosition = (xPosition) => {
    setXPosition(xPosition);
  };

  return (
    <Wrapper>
      <MenuButton xPosition={xPosition} />
      <Main style={{ width: `calc(100vw + ${xPosition}px)` }}>
        <Routes>
          <Route path="" element={<NoticePage />} />
          <Route path="search-course" element={<SearchCoursePage />} />
          <Route path="prev-register" element={<PrevRegisterPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="my-register" element={<MyRegisterPage />} />
        </Routes>
      </Main>
      {/* SidebarPage width 줄이면 MainPage랑 MenuButton의 xNum도 꼭 맞춰서 수정해주기! */}
      <SidebarPage width={350} getXPosition={getXPosition} />
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;
const Main = styled.div`
  display: flex;
  height: 96.5vh;
  border: 0px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: white;
  z-index: 80;
  transition: 0.4s ease;
`;
