import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import {
  courseListState,
  userPrevRegisterState,
  userRegisterState,
} from "../../recoil/userDataStates";

function StyledMenuButton(props) {
  const navigate = useNavigate();

  const currentPageG = useRecoilValue(currentPageState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userPRG, setUserPRG] = useRecoilState(userPrevRegisterState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);

  const onClick = async () => {
    await axios.get("/api/courseListGet").then((res) => {
      setCourseListG(res.data.content);
    });
    await axios.get("/api/prevGet").then((res) => {
      setUserPRG(res.data);
    });
    await axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
    // register axios
    switch (props.clickTo) {
      case "search-course":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
      case "prev-register":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
      case "register":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
      case "my-register":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
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
