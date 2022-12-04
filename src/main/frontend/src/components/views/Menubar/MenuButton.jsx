import React from "react";
import { useRecoilValue } from "recoil";
import { serverTimeState } from "../../recoil/currentStates";
import styled from "styled-components";
import StyledMenuButton from "./StyledMenuButton";
import StyledHomeButton from "./StyledHomeButton";

function MenuButton(props) {
  const serverTimeG = useRecoilValue(serverTimeState);

  function fillZero(width, time) {
    const str = time + "";
    return str.length >= width
      ? str
      : new Array(width - str.length + 1).join("0") + str;
  }

  return (
    <Wrapper>
      <Menubar style={{ width: `calc(100vw + ${props.xPosition}px)` }}>
        <StyledHomeButton id="home" buttonName="홈" zIndex="50" clickTo="" />
        <StyledMenuButton
          buttonName="교과목조회"
          zIndex="40"
          clickTo="search-course"
        />
        <StyledMenuButton
          buttonName="예비수강신청"
          zIndex="30"
          clickTo="prev-register"
        />
        <StyledMenuButton
          buttonName="수강신청"
          zIndex="20"
          clickTo="register"
        />
        <StyledMenuButton
          buttonName="수강내역조회"
          zIndex="10"
          clickTo="my-register"
        />
        <ServerTime>
          {fillZero(2, parseInt(serverTimeG / 3600))} :{" "}
          {fillZero(2, parseInt((serverTimeG % 3600) / 60))} :{" "}
          {fillZero(2, (serverTimeG % 3600) % 60)}
        </ServerTime>
      </Menubar>
    </Wrapper>
  );
}

export default MenuButton;

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
  font-size: 13px;
  color: #888888;
  bottom: 0px;
  right: 5px;
`;
