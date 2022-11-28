import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState, userRegisterState } from "../../recoil/userDataStates";
import {
  currentErrorState,
  currentPageState,
  serverTimeState,
} from "../../recoil/currentStates";
import styled from "styled-components";
import TimeTable from "./TimeTable";
import MyCourseList from "./MyCourseList";
import axios from "axios";

function MyRegisterPage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // 예비수강신청 목록 연동시켜놓은 상태, 나중에 수강신청 목록으로 바꿀 예정
  // const register = classInfo; // 하드코딩 데이터 테스트용

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/my-register") {
      setCurrentPageG("my-register");
    }
    axios
      .post("/api/cookieGet")
      .then((res) => {
        setUserInfoG(res.data);
        if (res.data.userRole !== "USER") {
          navigate("/");
          setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
          setTimeout(function () {
            setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
          }, 2000);
        }
      })
      .catch((error) => {
        navigate("/");
        setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
        setTimeout(function () {
          setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
        }, 2000);
      });
    axios.get("/api/time").then((res) => {
      let time = res.data.split(":");
      time[2] = time[2].split(".")[0];
      const second =
        Number(time[2]) + Number(time[1]) * 60 + Number(time[0]) * 3600;
      setServerTimeG(second);
    });
    axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
  }, []);

  return (
    <Wrapper>
      <SizingBox>
        <MyRegisterBox>
          <MyCourseList /> {/*수강 내역 리스트 컴포넌트*/}
          <Hr />
        </MyRegisterBox>
        <TimeTableBox>
          <TimeTable /> {/*시간표 컴포넌트*/}
        </TimeTableBox>
      </SizingBox>
    </Wrapper>
  );
}

export default MyRegisterPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;
const SizingBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyRegisterBox = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;
const TimeTableBox = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
`;
// const DivisionLine = styled.div`
//   width: 90vw;
//   height: 10px;
//   margin: 20px auto;
//   background-color: #BBBBBB;
//   border-radius: 5px;
// `
