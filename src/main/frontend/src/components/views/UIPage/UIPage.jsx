import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

import MenuButton from "../Menubar/MenuButton";
import SidebarPage from "../SidebarPage/SidebarPage";
import MainPage from "../MainPage/MainPage";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;

function UIPage() {
    const location = useLocation();
    console.log(location.state.userData);
    console.log(location.state.courseList);
    const courseList = location.state.courseList;
    const userData = location.state.userData;

    // sidebar 크기 조절
    const [xPosition, setXPosition] = useState(-20);
    const getXPosition = (xPosition) => {
        setXPosition(xPosition);
    };

    // MenuButton 누르면 Main화면 변경
    const [menuClick, setMenuClick] = useState("SearchCourse");
    const getMenuClick = (menuClick) => {
        setMenuClick(menuClick);
    }

    return (
        <Wrapper>
            <MenuButton xPosition={xPosition} getMenuClick={getMenuClick}/>
            <MainPage xPosition={xPosition} courseList={courseList} menuClick={menuClick}/>
            {/* SidebarPage width 줄이면 MainPage랑 MenuButton의 xNum도 꼭 맞춰서 수정해주기! */}
            <SidebarPage width={20} getXPosition={getXPosition} courseList={courseList} userData={userData}/>
        </Wrapper>
    );
}

export default UIPage;