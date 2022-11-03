import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { AiFillDropboxSquare, AiOutlineClose } from "react-icons/ai";
import { MdAssignmentTurnedIn } from "react-icons/md";

function SignUpPage(props) {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Close Toggle Event
  const onClickClose = () => {
    props.getToggleSignUp(false);
  };
  // input 변경값 감지
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  // input 변경값 감지
  const handleInputName = (e) => {
    setUserName(e.target.value);
  };
  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };
  // LoginBtn Click Event
  const onClickSignUp = async () => {
    if (userName === "") {
      alert("이름을 입력하세요.");
      document.getElementById("signup_name").focus();
    } else if (userId === "") {
      alert("아이디를 입력하세요.");
      document.getElementById("signup_id").focus();
    } else if (userPw === "") {
      alert("비밀번호를 입력하세요.");
      document.getElementById("signup_pw").focus();
    } else {
      //0->실패 1->성공 2->ID중복
      await axios
        .post(
          "/signup",
          {
            userName,
            userId,
            userPw,
          },
          axiosConfig
        )
        .then((res) => {
          console.log("signup");
          alert("회원가입이 정상적으로 완료되었습니다.");
          setUserName("");
          setUserId("");
          setUserPw("");
          props.getToggleSignUp(false);
        })
        .catch(function (error) {
          console.log("SignUp(Name, Id, Pw) Post Error");
          console.log(error);
          alert("회원가입이 정상적으로 완료되지 않았습니다.");
          setUserName("");
          setUserId("");
          setUserPw("");
          props.getToggleSignUp(false);
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
            id="signup_pw"
            type="password"
            value={userPw}
            onChange={handleInputPw}
            placeholder="Password"
          />
        </DivUserPw>
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
