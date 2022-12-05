import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  currentErrorState,
  currentPageState,
  serverTimeState,
} from "../../recoil/currentStates";
import { userInfoState } from "../../recoil/userDataStates";
import axios from "axios";
import styled from "styled-components";
import PrevRegisterFilter from "./PrevRegisterFilter";
import PrevRegisterList from "./PrevRegisterList";
import MyPrevRegisterList from "./MyPrevRegisterList";

function PrevRegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setCurrentPageG = useSetRecoilState(currentPageState);
  const setCurrentErrorG = useSetRecoilState(currentErrorState);
  const setUserInfoG = useSetRecoilState(userInfoState);
  const setServerTimeG = useSetRecoilState(serverTimeState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/prev-register") {
      setCurrentPageG("prev-register");
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
      .catch(() => {
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
  }, []);

  return (
    <Wrapper>
      <SizingBox>
        <PrevRegisterBox>
          <PrevRegisterFilter />
          <PrevRegisterList />
        </PrevRegisterBox>
        <MyPrevRegisterBox>
          <Hr />
          <MyPrevRegisterList />
        </MyPrevRegisterBox>
      </SizingBox>
    </Wrapper>
  );
}

export default PrevRegisterPage;

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
const PrevRegisterBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyPrevRegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  overflow: auto;
`;
