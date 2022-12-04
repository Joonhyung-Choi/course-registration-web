import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentErrorState } from "../../recoil/currentStates";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { MdAssignmentTurnedIn } from "react-icons/md";

function SignUpPage(props) {
  const setCurrentErrorG = useSetRecoilState(currentErrorState);
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const onClickClose = () => {
    setUserName("");
    setUserId("");
    setUserPw("");
    setUserPw2("");
    props.getToggleSignUp(false);
  };

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPw2, setUserPw2] = useState("");

  const handleInputName = (e) => {
    setUserName(e.target.value);
  };
  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };
  const handleInputPw2 = (e) => {
    setUserPw2(e.target.value);
  };
  const onClickSignUp = async () => {
    if (userName === "") {
      setCurrentErrorG(["이름을 입력하세요.", true]);
      setTimeout(function () {
        setCurrentErrorG(["이름을 입력하세요.", false]);
      }, 2000);
      document.getElementById("signup_name").focus();
    } else if (userId === "") {
      setCurrentErrorG(["아이디를 입력하세요.", true]);
      setTimeout(function () {
        setCurrentErrorG(["아이디를 입력하세요.", false]);
      }, 2000);
      document.getElementById("signup_id").focus();
    } else if (userPw === "") {
      setCurrentErrorG(["비밀번호를 입력하세요.", true]);
      setTimeout(function () {
        setCurrentErrorG(["비밀번호를 입력하세요.", false]);
      }, 2000);
      document.getElementById("signup_Pw").focus();
    } else if (userPw2 === "") {
      setCurrentErrorG(["2차 비밀번호를 입력하세요.", true]);
      setTimeout(function () {
        setCurrentErrorG(["2차 비밀번호를 입력하세요.", false]);
      }, 2000);
      document.getElementById("signup_pw2").focus();
    } else if (userPw !== userPw2) {
      setCurrentErrorG(["2차 비밀번호가 일치하지 않습니다.", true]);
      setTimeout(function () {
        setCurrentErrorG(["2차 비밀번호가 일치하지 않습니다.", false]);
      }, 2000);
      document.getElementById("signup_pw2").focus();
    } else {
      await axios
        .post(
          "/api/signup",
          {
            userName,
            userId,
            userPw,
          },
          axiosConfig
        )
        .then((res) => {
          console.log("signup");
          setCurrentErrorG(["회원가입이 완료되었습니다.", true]);
          setTimeout(function () {
            setCurrentErrorG(["회원가입이 완료되었습니다.", false]);
          }, 2000);
          setUserName("");
          setUserId("");
          setUserPw("");
          setUserPw2("");
          props.getToggleSignUp(false);
        })
        .catch(function (error) {
          console.log("SignUp(Name, Id, Pw) Post Error");
          setCurrentErrorG([error.response.data.errorMessage, true]);
          setTimeout(function () {
            setCurrentErrorG([error.response.data.errorMessage, false]);
          }, 2000);
        });
    }
  };

  return (
    <Wrapper
      style={props.toggleSignUp ? { display: "flex" } : { display: "none" }}
    >
      <InnerWrap>
        <BtnClose onClick={onClickClose}>
          <IconClose />
        </BtnClose>
        <DivTitleSignUp>
          <ImgLogo
            src="assets/img/mayoUniversityLogo.png"
            alt="mayoUniversityLogo1"
          />
          <DivTitle>
            <TextTItle>Mayo University</TextTItle>
            <TextTItle style={{ fontSize: "30px" }}>회원가입</TextTItle>
          </DivTitle>
        </DivTitleSignUp>
        <DivUserName>
          <PUserName>이름</PUserName>
          <InputUserName
            id="signup_name"
            type="text"
            value={userName}
            onChange={handleInputName}
            placeholder="Name"
          />
        </DivUserName>
        <DivUserId>
          <PUserId>아이디</PUserId>
          <InputUserId
            id="signup_id"
            type="text"
            value={userId}
            onChange={handleInputId}
            placeholder="ID"
          />
        </DivUserId>
        <DivUserPw>
          <PUserPw>비밀번호</PUserPw>
          <InputUserPw
            id="signup_Pw"
            type="password"
            value={userPw}
            onChange={handleInputPw}
            placeholder="Password"
          />
        </DivUserPw>
        <DivUserPw2>
          <PUserPw2>2차 비밀번호</PUserPw2>
          <InputUserPw2
            id="signup_pw2"
            type="password"
            value={userPw2}
            onChange={handleInputPw2}
            placeholder="Password"
          />
        </DivUserPw2>
        <DivSignUp onClick={onClickSignUp}>
          <BtnSignUp>회원가입</BtnSignUp>
          <IconSignUp />
        </DivSignUp>
      </InnerWrap>
    </Wrapper>
  );
}

export default SignUpPage;

const Wrapper = styled.div`
  position: absolute;
  width: 70%;
  min-width: 767px;
  height: 90%;
  background-image: linear-gradient(#ffffff 80%, #fff0b3 100%);
  border-radius: 20px;
  box-shadow: 3px 3px 12px -3px gray;
  padding: 30px;
`;
const InnerWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const BtnClose = styled.a`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  height: auto;
  cursor: pointer;
`;
const DivTitleSignUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 0px;
  margin: 0px;
  margin-bottom: 50px;
`;
const IconClose = styled(AiOutlineClose)`
  width: 25px;
  height: 25px;
`;
const ImgLogo = styled.img`
  width: auto;
  height: 65px;
  margin-right: 8px;
`;
const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #313131;
  font-size: 22px;
  text-align: left;
`;
const TextTItle = styled.p`
  padding: 0px;
  margin: 0px;
  margin-top: 2px;
  margin-bottom: 2px;
`;
const DivUserName = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const PUserName = styled.p`
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  color: #313131;
  font-size: 14px;
`;
const InputUserName = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 12px;
  padding-left: 16px;
  margin-left: 5px;
`;
const DivUserId = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const PUserId = styled.p`
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  color: #313131;
  font-size: 14px;
`;
const InputUserId = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 12px;
  padding-left: 16px;
  margin-left: 5px;
`;
const DivUserPw = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const PUserPw = styled.p`
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  color: #313131;
  font-size: 14px;
`;
const InputUserPw = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 12px;
  padding-left: 16px;
  margin-left: 5px;
`;
const DivUserPw2 = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const PUserPw2 = styled.p`
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  color: #313131;
  font-size: 14px;
`;
const InputUserPw2 = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 12px;
  padding-left: 16px;
  margin-left: 5px;
`;
const DivSignUp = styled.a`
  display: flex;
  position: relative;
  margin: 30px auto;
  background-color: #616161;
  padding: 12px 16px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  cursor: pointer;
  &:hover {
    background-color: #313131;
  }
`;
const BtnSignUp = styled.a`
  color: #fff;
  font-size: 16px;
  padding-top: 2px;
  padding-right: 18px;
  justify-content: center;
  align-items: center;
  vertical-align: center;
`;
const IconSignUp = styled(MdAssignmentTurnedIn)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -53%);
  color: #fff;
`;
