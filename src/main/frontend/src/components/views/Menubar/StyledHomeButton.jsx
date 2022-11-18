import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentPageState } from "../../recoil/currentStates";

import { HiHome } from "react-icons/hi";
import styled from "styled-components";

function StyledHomeButton(props) {
  const currentPageG = useRecoilValue(currentPageState);

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/mayo-main/${props.clickTo}`);
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
      <ImgHome />
    </Button>
  );
}

export default StyledHomeButton;

const Button = styled.button`
  height: 91%;
  width: auto;
  min-width: 35px;
  font-size: 0.86rem;
  background-color: #fff0b3;
  border: 0px;
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 3px 5px;
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
