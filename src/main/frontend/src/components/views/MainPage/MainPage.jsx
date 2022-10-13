import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import SearchCoursePage from "../SearchCoursePage/SearchCoursePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import PrevRegisterPage from '../PrevRegisterPage/PrevRegisterPage';
import MyRegisterPage from '../MyRegisterPage/MyRegisterPage';

const Wrapper = styled.div`
  height: 96.5vh;
  border: 0px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: white;
  z-index: 100;
  transition: 0.4s ease;
`;

function MainPage(props) {

  const courseList = props.courseList;

  return (
    <Wrapper style={{ width: `${100 + props.xPosition}vw` }}>
      {props.menuClick==="SearchCourse" && <SearchCoursePage courseList={courseList} />}
      {props.menuClick==="PrevRegister" && <PrevRegisterPage/>}
      {props.menuClick==="Register" && <RegisterPage/>}
      {props.menuClick==="MyRegister" && <MyRegisterPage/>}
    </Wrapper>
  );
}

export default MainPage;
