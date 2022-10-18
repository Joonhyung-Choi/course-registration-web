import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

import StyledMenuButton from "./StyledMenuButton";
import StyledHomeButton from "./StyledHomeButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 3.5vh;
  background-color: #f6f6f6;
`;

const Menubar = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;
  background-color: #f6f6f6;
  height: 3.6vh;
  padding: 0;
  margin: 0;
  z-index: 9;
  transition: 0.4s ease;
`;

function MenuButton(props) {
  const navigate = useNavigate();

  const courseList = props.courseList;
  const userData = props.userData;

  // xPosition 차이 값 (open&close)
  let xNum = 20;

  return (
    <Wrapper>
      <Menubar style={{ width: `${100 + props.xPosition}vw` }}>
        <StyledHomeButton
            buttonName="홈"
            zIndex="50"
            clickTo=""
            courseList = {courseList}
            userData = {userData}
        />
        <StyledMenuButton
          buttonName="교과목신청"
          zIndex="40"
          clickTo="search-course"
          courseList = {courseList}
          userData = {userData}
        />
        <StyledMenuButton
          buttonName="예비수강신청"
          zIndex="30"
          clickTo="prev-register"
          courseList = {courseList}
          userData = {userData}
        />
        <StyledMenuButton
          buttonName="수강신청"
          zIndex="20"
          clickTo="register"
          courseList = {courseList}
          userData = {userData}
        />
        <StyledMenuButton
          buttonName="수강내역조회"
          zIndex="10"
          clickTo="my-register"
          courseList = {courseList}
          userData = {userData}
        />
      </Menubar>
    </Wrapper>
  );
}

export default MenuButton;
