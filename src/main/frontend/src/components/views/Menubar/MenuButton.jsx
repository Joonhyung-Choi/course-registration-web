import React, { useState, useEffect } from "react";

import axios from "axios";

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

const ServerTime = styled.div`
  display: flex;
  position: absolute;
  font-size: 14px;
  color: #666666;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
`;

function MenuButton(props) {
  const courseList = props.courseList;
  const userData = props.userData;

  const [serverTime, setServerTime] = useState("");

  // useEffect(() => {
  //   axios.get("api/time").then((res) => {
  //     setServerTime(res.data);
  //   });
  // }, []);
  //
  // setInterval (() => {
  //   axios.get("api/time").then((res) => {
  //     setServerTime(res.data);
  //     console.log(serverTime);
  //   });
  // }, 1000);

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
        />
        <StyledMenuButton
          id="searchCourse"
          buttonName="교과목조회"
          zIndex="40"
          clickTo="search-course"
          courseList={courseList}
          userData={userData}
        />
        <StyledMenuButton
          id="prevRegister"
          buttonName="예비수강신청"
          zIndex="30"
          clickTo="prev-register"
          courseList={courseList}
          userData={userData}
        />
        <StyledMenuButton
          id="register"
          buttonName="수강신청"
          zIndex="20"
          clickTo="register"
          courseList={courseList}
          userData={userData}
        />
        <StyledMenuButton
          id="myRegister"
          buttonName="수강내역조회"
          zIndex="10"
          clickTo="my-register"
          courseList={courseList}
          userData={userData}
        />
        <ServerTime>{serverTime}</ServerTime>
      </Menubar>
    </Wrapper>
  );
}

export default MenuButton;
