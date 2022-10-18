import React, { useState, useEffect } from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";

import MenuButton from "../Menubar/MenuButton";
import SidebarPage from "../SidebarPage/SidebarPage";

import NoticePage from "../NoticePage/NoticePage";
import SearchCoursePage from "../SearchCoursePage/SearchCoursePage";
import PrevRegisterPage from "../PrevRegisterPage/PrevRegisterPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MyRegisterPage from "../MyRegisterPage/MyRegisterPage";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;
const Main = styled.div`
  height: 96.5vh;
  border: 0px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: white;
  z-index: 100;
  transition: 0.4s ease;
`;

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const courseList = location.state.courseList;
    const userData = location.state.userData;
    // sidebar 크기 조절
    const [xPosition, setXPosition] = useState(-20);
    const getXPosition = (xPosition) => {
        setXPosition(xPosition);
    }

    return (
        <Wrapper>
            <MenuButton xPosition={xPosition} courseList={courseList} userData={userData}/>
            <Main style={{ width: `${100 + xPosition}vw` }}>
                <Routes>
                    <Route path="" element={<NoticePage/>}/>
                    <Route path="search-course" element={<SearchCoursePage/>}/>
                    <Route path="prev-register" element={<PrevRegisterPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="my-register" element={<MyRegisterPage/>}/>
                </Routes>
            </Main>
            {/* SidebarPage width 줄이면 UIPage랑 MenuButton의 xNum도 꼭 맞춰서 수정해주기! */}
            <SidebarPage width={20} getXPosition={getXPosition} userData={userData}/>
        </Wrapper>
    );
}

export default MainPage;