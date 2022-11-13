import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SignUpPage from "./SignUpPage";
import FindIdPwPage from "./FindIdPwPage";

function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const [toggleSignUp, setToggleSignUp] = useState(false);
  const getToggleSignUp = (toggleSignUp) => {
    setToggleSignUp(toggleSignUp);
  };
  const [toggleFind, setToggleFind] = useState(false);
  const getToggleFind = (toggleFind) => {
    setToggleFind(toggleFind);
  };

  let courseList = null;
  let userData = null;
  // input 변경값 감지
  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };
  // Open Toggle Event
  const onClickOpenSignUp = () => {
    setToggleSignUp(true);
  };
  const onClickOpenFind = () => {
    setToggleFind(true);
  };
  // Input Enter Event
  const onEnterPress = async (e) => {
    if (e.key == "Enter") {
      await onClickLogin();
    }
  };
  // LoginBtn Click Event
  const onClickLogin = async () => {
    if (userId === "") {
      alert("아이디를 입력하세요.");
      document.getElementById("login_id").focus();
    } else if (userPw === "") {
      alert("비밀번호를 입력하세요.");
      document.getElementById("login_pw").focus();
    } else {
      await axios
        .post("/api/login", {
          userId,
          userPw,
        })
        .then((res) => {
          userData = res.data;
        })
        .catch(function (error) {
          console.log("Login(Id, Pw) Error");
          console.log(error);
          // 오류발생시 실행
        });

      await axios
        .get("/api/main")
        .then((res) => {
          courseList = res.data.content;
        })
        .catch(function (error) {
          console.log("MainDB Get Error");
          console.log(error);
        });

      if (userData !== null) {
        console.log("login");
        navigate("/mayo-main", { state: { userData, courseList } });
      } else if (userData === null) {
        console.log("login-error");
        alert("잘못된 아이디 또는 비밀번호입니다.");
      } else {
        console.log("unexpected-error");
      }
    }
  };

  return (
    <Wrapper>
      <LogoImg
        src="assets/img/mayoUniversityLogo.png"
        alt="mayoUniversityLogo1"
      />
      <Form>
        <IdPwDiv>
          {/* 가로폭 길이 심하게 줄이면 서로 어긋나면서 뒤틀리는 문제 해결하기 */}
          <InputID
            id="login_id"
            type="text"
            name="input_id"
            value={userId}
            onChange={handleInputId}
            onKeyDown={onEnterPress}
            placeholder="ID"
          />
          <PWButtonDiv>
            <InputPW
              id="login_pw"
              type="password"
              name="input_pw"
              value={userPw}
              onChange={handleInputPw}
              onKeyDown={onEnterPress}
              placeholder="Password"
            />
            <Button type="button" onClick={onClickLogin}>
              <ButtonImg src="assets/img/sign-in.png" alt="signIn" />
            </Button>
          </PWButtonDiv>
        </IdPwDiv>
      </Form>
      <P>
        게스트로 로그인 하시려면 아이디와 비밀번호를 <Span>mayo</Span> 로
        입력하세요.
      </P>
      <SignUpPage
        toggleSignUp={toggleSignUp}
        getToggleSignUp={getToggleSignUp}
      />
      <FindIdPwPage toggleFind={toggleFind} getToggleFind={getToggleFind} />
      <Toggle>
        <A onClick={onClickOpenSignUp} style={{ paddingTop: "1px" }}>
          회원가입
        </A>
        <PBefore />
        <A onClick={onClickOpenFind} style={{ paddingBottom: "2px" }}>
          아이디•비밀번호찾기
        </A>
      </Toggle>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 6.5%;
  min-width: 80px;
  height: auto;
  margin: 0 auto;
`;

const ButtonImg = styled.img`
  width: 65%;
  height: 55%;
  min-height: 15px;
  margin-top: auto;
  margin-bottom: auto;
  opacity: 0.4;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 11%;
  min-width: 152px;
  margin: 0 auto;
  background-color: #fff;
`;

const IdPwDiv = styled.div`
  display: flex;
  flex-direction: column;
  // width: 30%;
  width: 100%;
  height: 9vh;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  margin-top: 5.5vh;
  margin-bottom: 4.4vh;
`;

const PWButtonDiv = styled.div`
  display: flex;
  flex-direction: row;

  // width: 13%;
  // height: auto;
  width: 100%;
  height: 50%;
  justify-content: center;
`;

const InputID = styled.input`
  position: relative;
  font-size: 15px;
  color: #313131;
  height: 50%;
  width: 100%;
  padding: 12px;
  padding-left: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &::-webkit-input-placeholder {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const InputPW = styled.input`
  position: relative;
  font-size: 15px;
  color: #313131;
  height: 100%;
  width: 100%;
  padding: 12px;
  padding-left: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &::-webkit-input-placeholder {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled.button`
  min-width: 40px;
  position: relative;
  font-size: 16px;
  min-height: 26px;
  height: 100%;
  width: 20%;

  padding-top: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 6px;
  cursor: pointer;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &:hover {
    background: rgb(223, 223, 223, 0.9);
  }
`;

const P = styled.p`
  padding: 0;
  color: #313131;
  margin: 0;
  margin-bottom: 10px;
  font-size: 12px;
  margin: 0 auto;
`;

const Span = styled.span`
  color: #d32f2fcb;
  font-weight: 600;
`;
const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  color: #313131;
  font-size: 11px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
const PBefore = styled.div`
  border-left: 1px solid #313131;
  height: 60%;
  margin: 0 5px;
`;
const A = styled.a`
  width: 100px;
  text-align: right;
  justify-content: flex-start;
  cursor: pointer;
`;
