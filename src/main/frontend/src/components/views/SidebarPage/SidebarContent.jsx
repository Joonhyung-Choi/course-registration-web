import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../recoil/userDataStates";
import { BsPersonFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

import MiniTable from "./MiniTable";

function SidebarContent(props) {
  const userInfoG = useRecoilValue(userInfoState);

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
      <TableArea>
        <MiniTable/>
      </TableArea>
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
  margin-bottom: 35px;
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
const TableArea = styled.div`
  width: 100%;
  height: 30%;
`;
