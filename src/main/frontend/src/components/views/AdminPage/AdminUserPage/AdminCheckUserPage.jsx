import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AdminAddUserPage from "./AdminAddUserPage";
import { useRecoilState } from "recoil";
import {
  currentAdminPageState,
  userDataState,
} from "../../../recoil/adminDataStates";
import axios from "axios";

function AdminCheckUserPage() {
  const location = useLocation();
  const [currentPageG, setCurrentPageG] = useRecoilState(currentAdminPageState);
  const [userDataG, setUserDataG] = useRecoilState(userDataState);

  useEffect(() => {
    if (location.pathname === "/mayo-admin/") {
      setCurrentPageG("");
    }
  });

  // toggle AdminAddUserPage
  const [toggleAddUser, setToggleAddUser] = useState(false);
  const getToggleAddUser = (toggleAddUser) => {
    setToggleAddUser(toggleAddUser);
  };
  const onClickOpenAddUser = () => {
    setToggleAddUser(true);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {/* <AdminAddUserPage
          toggleAddUser={toggleAddUser}
          getToggleAddUser={getToggleAddUser}
        /> */}
        <Table>
          <tr>
            <TH style={{ borderTopLeftRadius: "6px" }}>이름</TH>
            <TH>ID</TH>
            <TH>유저구분</TH>
            <TH>신청학점</TH>
            <TH style={{ borderTopRightRadius: "6px" }}>최대학점</TH>
          </tr>
          {/* <tr>
            <TD_H colSpan={5} style={{ padding: "4px 0px" }}>
              <SignInButton onClick={onClickOpenAddUser}>
                유저 추가
              </SignInButton>
            </TD_H>
          </tr> */}
          {userDataG.map((item) => (
            <tr>
              <TD>{item.userName}</TD>
              <TD>{item.userId}</TD>
              <TD>{item.userRole}</TD>
              <TD>{item.userScore}</TD>
              <TD>{item.userScoreDefault}</TD>
            </tr>
          ))}
        </Table>
      </InnerWrapper>
    </Wrapper>
  );
}
export default AdminCheckUserPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 45px);
  padding: 20px;
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
    background-clip: padding-box;
    border: 1.5px solid transparent;
    border-radius: 100px;
  }
`;
const TH = styled.th`
  position: sticky;
  top: 0;
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 13px;
  background-color: #555;
`;
const TD_H = styled.td`
  position: sticky;
  top: 30px;
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 12px;
  border-bottom: 1px solid #111;
  background-color: #222;
`;
const TD = styled.td`
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 12px;
  border-bottom: 1px solid #111;
`;
const Table = styled.table`
  width: 100%;
  margin-bottom: auto;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;

const SignInButton = styled.button`
  margin: auto;
  display: block;
  width: 230px;
  height: 23px;
  background-color: white;
  border: 2px solid #2b3a55;
  color: #2b3a55;
  border-radius: 7px;
  font-size: 14px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: #2b3a55;
    color: white;
  }
`;
