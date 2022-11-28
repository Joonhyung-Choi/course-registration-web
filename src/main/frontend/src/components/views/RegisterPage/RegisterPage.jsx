import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageState,
  serverTimeState,
  currentErrorState,
  registerSwitchState,
} from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import RegisterFilter from "./RegisterFilter";
import RegisterSwitch from "./RegisterSwitch";
import PrevRegisterList from "./PrevRegisterList";
import RegisterList from "./RegisterList";
import MyRegisterList from "./MyRegisterList";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const registerSwitchG = useRecoilValue(registerSwitchState);
  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/register") {
      setCurrentPageG("register");
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
  // filtering
  const [filteringList, setFilteringList] = useState(courseListG);
  const getFilteringList = (filteringList) => {
    setFilteringList(filteringList);
  };

  return (
    <Wrapper>
      <SizingBox>
        <RegisterBox>
          <RegisterFilter getFilteringList={getFilteringList} />
          <RegisterSwitch />
          {registerSwitchG ? (
            <PrevRegisterList filteringList={filteringList} />
          ) : (
            <RegisterList filteringList={filteringList} />
          )}
        </RegisterBox>
        <MyRegisterBox>
          <Hr />
          <MyRegisterList />
        </MyRegisterBox>
      </SizingBox>
    </Wrapper>
  );
}

export default RegisterPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const SizingBox = styled.div`
  width: 95%;
  height: 95%;
`;
const RegisterBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 50%;
  overflow: auto;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyRegisterBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
`;
