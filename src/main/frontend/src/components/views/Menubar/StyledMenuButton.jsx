import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentPageState,
  currentErrorState,
} from "../../recoil/currentStates";
import { userInfoState } from "../../recoil/userDataStates";
import { serverTimeState } from "../../recoil/currentStates";

import styled from "styled-components";
import axios from "axios";

function StyledMenuButton(props) {
  const navigate = useNavigate();
  const currentPageG = useRecoilValue(currentPageState);
  const userInfoG = useRecoilValue(userInfoState);
  const serverTimeG = useRecoilValue(serverTimeState);
  const setCurrentErrorG = useSetRecoilState(currentErrorState);

  const onClick = async () => {
    let prevRegisterStartTime;
    let prevRegisterEndTime;
    let registerEndTime;
    let registerStartTime;

    let prevStartDate = "";
    let prevStartTime = "";
    let prevEndDate = "";
    let prevEndTime = "";
    let startDate = "";
    let startTime = "";
    let endDate = "";
    let endTime = "";

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    await axios.get("/api/getAssignTime").then((res) => {
      prevStartDate = res.data[0].prevStartDate.split("-");
      prevStartTime = res.data[0].prevStartTime.split(":");
      prevEndDate = res.data[0].prevEndDate.split("-");
      prevEndTime = res.data[0].prevEndTime.split(":");
      startDate = res.data[0].startDate.split("-");
      startTime = res.data[0].startTime.split(":");
      endDate = res.data[0].endDate.split("-");
      endTime = res.data[0].endTime.split(":");

      prevRegisterStartTime =
        parseInt(prevStartTime[0]) * 3600 + parseInt(prevStartTime[1]) * 60;
      prevRegisterEndTime =
        parseInt(prevEndTime[0]) * 3600 + parseInt(prevEndTime[1]) * 60;
      registerStartTime =
        parseInt(startTime[0]) * 3600 + parseInt(startTime[1]) * 60;
      registerEndTime = parseInt(endTime[0]) * 3600 + parseInt(endTime[1]) * 60;
    });

    function overPrevRegisterStartTime() {
      if (parseInt(prevStartDate[0]) < year) {
        return true;
      } else if (parseInt(prevStartDate[0]) === year) {
        if (parseInt(prevStartDate[1]) < month) {
          return true;
        } else if (parseInt(prevStartDate[1]) === month) {
          if (parseInt(prevStartDate[2]) < date) {
            return true;
          } else if (parseInt(prevStartDate[2]) === date) {
            if (prevRegisterStartTime <= serverTimeG) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    function lessPrevRegisterEndTime() {
      if (parseInt(prevEndDate[0]) > year) {
        return true;
      } else if (parseInt(prevEndDate[0]) === year) {
        if (parseInt(prevEndDate[1]) > month) {
          return true;
        } else if (parseInt(prevEndDate[1]) === month) {
          if (parseInt(prevEndDate[2]) > date) {
            return true;
          } else if (parseInt(prevEndDate[2]) === date) {
            if (prevRegisterEndTime >= serverTimeG) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    function overRegisterStartTime() {
      if (parseInt(startDate[0]) < year) {
        return true;
      } else if (parseInt(startDate[0]) === year) {
        if (parseInt(startDate[1]) < month) {
          return true;
        } else if (parseInt(startDate[1]) === month) {
          if (parseInt(startDate[2]) < date) {
            return true;
          } else if (parseInt(startDate[2]) === date) {
            if (registerStartTime <= serverTimeG) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    function lessRegisterEndTime() {
      if (parseInt(endDate[0]) > year) {
        return true;
      } else if (parseInt(endDate[0]) === year) {
        if (parseInt(endDate[1]) > month) {
          return true;
        } else if (parseInt(endDate[1]) === month) {
          if (parseInt(endDate[2]) > date) {
            return true;
          } else if (parseInt(endDate[2]) === date) {
            if (registerEndTime >= serverTimeG) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    switch (props.clickTo) {
      case "search-course":
        navigate(`/mayo-main/${props.clickTo}`);
        break;
      case "prev-register":
        if (overPrevRegisterStartTime() && lessPrevRegisterEndTime()) {
          if (userInfoG.userRole === "USER") {
            navigate(`/mayo-main/${props.clickTo}`);
            break;
          } else {
            navigate("/");
            setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
            setTimeout(function () {
              setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
            }, 2000);
            break;
          }
        } else {
          navigate("/");
          setCurrentErrorG(["예비수강신청 날짜가 아닙니다.", true]);
          setTimeout(function () {
            setCurrentErrorG(["예비수강신청 날짜가 아닙니다.", false]);
          }, 2000);
          break;
        }

      case "register":
        if (overRegisterStartTime() && lessRegisterEndTime()) {
          if (userInfoG.userRole === "USER") {
            navigate(`/mayo-main/${props.clickTo}`);
            break;
          } else {
            navigate("/");
            setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
            setTimeout(function () {
              setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
            }, 2000);
            break;
          }
        } else {
          navigate("/");
          setCurrentErrorG(["수강신청 날짜가 아닙니다.", true]);
          setTimeout(function () {
            setCurrentErrorG(["수강신청 날짜가 아닙니다.", false]);
          }, 2000);
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
      default:
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
