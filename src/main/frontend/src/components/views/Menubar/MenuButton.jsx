import React,{useState} from "react";
import styled from "styled-components";

import StyledMenuButton from "./StyledMenuButton";

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
  // xPosition 차이 값 (open&close)
  let xNum = 20;

  const onClickSearchCourse = () => {
    props.getMenuClick("SearchCourse");
  };
  const onClickPrevRegister = () => {
    props.getMenuClick("PrevRegiste");
  };
  const onClickRegister = () => {
    props.getMenuClick("Register");
  };
  const onClickMyRegister = () => {
    props.getMenuClick("MyRegister");
  };

  return (
    <Wrapper>
      <Menubar style={{ width: `${100 + props.xPosition}vw` }}>
        <StyledMenuButton
          buttonName="교과목신청"
          zIndex="40"
          onclick={onClickSearchCourse}
        />
        <StyledMenuButton
          buttonName="예비수강신청"
          zIndex="30"
          onclick={onClickPrevRegister}
        />
        <StyledMenuButton
          buttonName="수강신청"
          zIndex="20"
          onclick={onClickRegister}
        />
        <StyledMenuButton
          buttonName="수강내역조회"
          zIndex="10"
          onclick={onClickMyRegister}
        />
      </Menubar>
    </Wrapper>
  );
}

export default MenuButton;
