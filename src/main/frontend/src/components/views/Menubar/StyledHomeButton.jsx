import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiHome } from "react-icons/hi";
import styled from "styled-components";

const Button = styled.button`
  height: 91%;
  width: auto;
  min-width: 35px;
  font-size: 0.86rem;
  background-color: #fff0b3;
  border: 0px;
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 6px 8px;
  box-shadow: 3px -3px 15px -10px gray;
  cursor: pointer;
  &:hover {
    background-color: #e9dba3;
  }
  &:active {
    background-color: #fff;
  }
`;
const ImgHome = styled(HiHome)`
  width: 100%;
  height: 100%;
  color: #313131;
`;

function StyledHomeButton(props) {
  const navigate = useNavigate();

  const courseList = props.courseList;
  const userData = props.userData;

  const onClick = () => {
    props.getCurrentBtn(props.id);
    console.log(props.id);
    console.log(props.currentBtn);
    navigate(`/mayo-main/${props.clickTo}`, {
      state: { userData, courseList },
    });
  };

  return (
    <Button
      onClick={onClick}
      style={
        props.id === props.currentBtn
          ? { zIndex: `${props.zIndex}`, background: "#fff" }
          : { zIndex: `${props.zIndex}`, background: "#fff0b3" }
      }
    >
      <ImgHome />
    </Button>
  );
}

export default StyledHomeButton;
