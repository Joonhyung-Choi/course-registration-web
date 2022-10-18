import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
  height: 91%;
  width:14%;
  font-size:0.86rem;
  background-color: #fff7d8;
  border: 0px;
  border-radius: 10px 10px 0px 0px;
  margin:0px;
  padding: 0px;
  padding-top:0.4vh;
  box-shadow: 3px -2px 15px -10px gray;
  color:black;
  cursor: pointer;
  &:hover {
    background-color: #fff4c8;
    border: 0px;
  }
  &:active {
    background-color: #fff4c8;
    border: 0px;
  }
  z-index: ${(props)=>props.zIndex || 1};
`;

function StyledMenuButton(props) {
  const navigate = useNavigate();

  const courseList = props.courseList;
  const userData = props.userData;

  const onClick = () => {
    console.log(props.clickTo);
    navigate(`/mayo-main/${props.clickTo}`, {state:{userData,courseList}});
  };

  return(
    <Button onClick={onClick}>{props.buttonName}</Button>
  );
}

export default StyledMenuButton;
