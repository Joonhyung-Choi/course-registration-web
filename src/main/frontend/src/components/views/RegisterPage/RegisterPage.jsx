import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageState,
  serverTimeState,
  currentErrorState,
  registerSwitchState,
  myRegisterSwitchState,
} from "../../recoil/currentStates";
import {
  userInfoState,
  userRegisterState,
  waitingRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import RegisterFilter from "./RegisterFilter";
import RegisterSwitch from "./RegisterSwitch";
import PrevRegisterList from "./PrevRegisterList";
import RegisterList from "./RegisterList";
import MyRegisterList from "./MyRegisterList";
import WaitingRegisterList from "./WaitingRegisterList";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const registerSwitchG = useRecoilValue(registerSwitchState);
  const [myRegisterSwitchG, setMyRegisterSwitchG] = useRecoilState(
    myRegisterSwitchState
  );
  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  const [waitingRG, setWaitingRG] = useRecoilState(waitingRegisterState);
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
    axios.get("/api/getWaitingList").then((res) => {
      console.log("getW",res.data);
      setWaitingRG(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <SizingBox>
        <RegisterBox>
          <RegisterSwitch />
          {registerSwitchG ? (
            <PrevRegisterList />
          ) : (
            <>
              <RegisterFilter />
              <RegisterList />
            </>
          )}
        </RegisterBox>
        <MyRegisterBox>
          <Hr />
          <TagBtn
            onClick={() => {
              setMyRegisterSwitchG(false);
            }}
          >
            대기열
          </TagBtn>
          <TagBtn
            style={{ transform: "translate(-78px, 0)" }}
            onClick={() => {
              setMyRegisterSwitchG(true);
            }}
          >
            신청완료
          </TagBtn>
          {myRegisterSwitchG ? <MyRegisterList /> : <WaitingRegisterList />}
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
const TagBtn = styled.button`
  display: flex;
  position: absolute;
  background: rgb(129, 138, 146);
  top: 0px;
  right: 10px;
  width: 80px;
  height: 24px;
  justify-content: center;
  align-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 2px solid rgb(147 155 163);
  color: #fff;
  font-size: 12px;
  padding-top: 2px;
  cursor: pointer;
`;
const MyRegisterBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50%;
  overflow: auto;
`;
