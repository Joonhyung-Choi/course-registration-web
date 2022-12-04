import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import { userInfoState } from "../../recoil/userDataStates";
import styled from "styled-components";

function StyledMenuButton(props) {
  const navigate = useNavigate();
  const currentPageG = useRecoilValue(currentPageState);
  const userInfoG = useRecoilValue(userInfoState);

  const onClick = async () => {
    switch (props.clickTo) {
      case "search-course":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
      case "prev-register":
        if (userInfoG.userRole === "USER") {
          navigate(`/mayo-main/${props.clickTo}`);
          break;
        } else {
          navigate("/");
          break;
        }
      case "register":
        if (userInfoG.userRole === "USER") {
          navigate(`/mayo-main/${props.clickTo}`);
          break;
        } else {
          navigate("/");
          break;
        }
      case "my-register":
        if (userInfoG.userRole === "USER") {
          navigate(`/mayo-main/${props.clickTo}`);
          break;
        } else {
          navigate("/");
          break;
        }
    }
  };

  return (
    <Button
      onClick={onClick}
      style={
        props.clickTo === currentPageG
          ? { background: "#fff" }
          : { background: "#fff7d8" }
      }
    >
      {props.buttonName}
    </Button>
  );
}

export default StyledMenuButton;

const Button = styled.button`
  height: 91%;
  width: 14%;
  min-width: 140px;
  font-size: 13px;
  color: #313131;
  background-color: #fff7d8;
  border: 0px;
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 0px;
  padding-top: 3px;
  box-shadow: 3px -3px 15px -9px gray;
  cursor: pointer;
  &:hover {
    background-color: #e9e2c4;
  }
`;
