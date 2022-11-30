import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import {currentPageState} from "../../recoil/currentStates";
import { userInfoState } from "../../recoil/userDataStates";
import axios from "axios";
import { BiLogOut } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import MiniTable from "./MiniTable";

function SidebarContent(props) {
  const userInfoG = useRecoilValue(userInfoState);
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const navigate = useNavigate();

  const onClickLogout = () => {
    axios.post("/api/logout").then((res) => {
      console.log("logout");
      navigate("/");
      setCurrentPageG("");
    });
  };

  return (
    <Wrapper>
      <Img
        src="/assets/img/mayoUniversityLogo4.png"
        alt="mayoUniversityLogo2"
      />
      <Info>
        <UserInfo>
          <UserIcon />
          <UserContext>{userInfoG.userName}</UserContext>
          <UserContext
            style={{ color: "#be4545", marginLeft: "7px", fontSize: "11px" }}
          >
            {userInfoG.userRole}
          </UserContext>
        </UserInfo>
        <RegisterInfo>
          <RegisterIcon />
          <RegisterContext>
            <PrevRegister>
              <LeftP>예비수강신청학점</LeftP>
              <Hr />
              <RightP>{userInfoG.userPrevScoreDefault}</RightP>
            </PrevRegister>
            <Register>
              <LeftP>수강신청학점</LeftP>
              <Hr />
              <RightP>{userInfoG.userScoreDefault}</RightP>
            </Register>
          </RegisterContext>
        </RegisterInfo>
      </Info>
      <MiniScheduleInfo>
        <MiniTable />
      </MiniScheduleInfo>
      <LogoutDiv>
        <LogoutBtn onClick={onClickLogout}>
          <LogoutIcon />
          <LogoutContext>로그아웃</LogoutContext>
        </LogoutBtn>
      </LogoutDiv>
    </Wrapper>
  );
}

export default SidebarContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
  align-items: center;
`;
const Img = styled.img`
  width: 220px;
  padding-bottom: 60px;
`;
const Info = styled.div``;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 35px;
`;
const UserIcon = styled(BsPersonFill)`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  color: #313131;
`;
const UserContext = styled.div`
  display: flex;
  flex-direction: column;
  color: #313131;
  padding-top: 5px;
  margin: 0;
  font-size: 13px;
`;
const RegisterInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
`;
const RegisterIcon = styled(HiDocumentText)`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  color: #313131;
`;
const RegisterContext = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  width: 130px;
`;
const PrevRegister = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Register = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftP = styled.p`
  display: flex;
  color: #313131;
  font-size: 12px;
  letter-spacing: -0.8px;
`;
const RightP = styled.p`
  display: flex;
  color: #313131;
  font-size: 13px;
  margin-left: auto;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  border-bottom: 1px solid #aaaaaa;
`;
const MiniScheduleInfo = styled.div`
  width: 100%;
  height: 30%;
`;
// logout
const LogoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;
const LogoutBtn = styled.button`
  display: flex;
  border: none;
  background: rgb(240, 240, 240);
  padding: 6px;
  border-radius: 9px;
  box-shadow: 2px 2px 3px rgb(49 49 49 / 34%);
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;
const LogoutIcon = styled(BiLogOut)`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  color: #313131;
`;
const LogoutContext = styled.p`
  font-size: 11px;
  padding-top: 5px;
  color: #313131;
`;
