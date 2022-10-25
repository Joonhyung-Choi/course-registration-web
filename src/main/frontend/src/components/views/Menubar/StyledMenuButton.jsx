import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  height: 91%;
  width: 14%;
  min-width: 140px;
  font-size: 14px;
  color: #313131;
  background-color: #fff7d8;
  border: 0px;
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 0px;
  padding-top: 0.4vh;
  box-shadow: 3px -3px 15px -9px gray;
  cursor: pointer;
  &:hover {
    background-color: #e9e2c4;
  }
`;

function StyledMenuButton(props) {
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
          : { zIndex: `${props.zIndex}`, background: "#fff7d8" }
      }
    >
      {props.buttonName}
    </Button>
  );
}

export default StyledMenuButton;
