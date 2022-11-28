import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { serverTimeState, currentErrorState } from "../../recoil/currentStates";
import axios from "axios";
import { userInfoState } from "../../recoil/userDataStates";

export default function ManagePage() {
  const navigate = useNavigate();

  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);

  useEffect(() => {
    axios
      .post("/api/cookieGet")
      .then((res) => {
        setUserInfoG(res.data);
        if (res.data.userRole !== "ADMIN") {
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
  }, []);

  return (
    <Wrapper>
      <>관리자 페이지 입니당</>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;
