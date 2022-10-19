import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [currentBtn, setCurrentBtn] = useState("home");
  const getCurrentBtn = (currentBtn) => {
    setCurrentBtn(currentBtn);
  };

  return (
    <Wrapper>
      <Menubar style={{ width: `calc(100vw + ${props.xPosition}px)` }}>
        <StyledHomeButton
          id="home"
          buttonName="홈"
          zIndex="50"
          clickTo=""
          courseList={courseList}
          userData={userData}
          getCurrentBtn={getCurrentBtn}
          currentBtn={currentBtn}
        />
        <StyledMenuButton
          id="searchCourse"
          buttonName="교과목조회"
          zIndex="40"
          clickTo="search-course"
          courseList={courseList}
          userData={userData}
          getCurrentBtn={getCurrentBtn}
          currentBtn={currentBtn}
        />
        <StyledMenuButton
          id="prevRegister"
          buttonName="예비수강신청"
          zIndex="30"
          clickTo="prev-register"
          courseList={courseList}
          userData={userData}
          getCurrentBtn={getCurrentBtn}
          currentBtn={currentBtn}
        />
        <StyledMenuButton
          id="register"
          buttonName="수강신청"
          zIndex="20"
          clickTo="register"
          courseList={courseList}
          userData={userData}
          getCurrentBtn={getCurrentBtn}
          currentBtn={currentBtn}
        />
        <StyledMenuButton
          id="myRegister"
          buttonName="수강내역조회"
          zIndex="10"
          clickTo="my-register"
          courseList={courseList}
          userData={userData}
          getCurrentBtn={getCurrentBtn}
          currentBtn={currentBtn}
        />
      </Menubar>
    </Wrapper>
  );
}

export default MenuButton;
