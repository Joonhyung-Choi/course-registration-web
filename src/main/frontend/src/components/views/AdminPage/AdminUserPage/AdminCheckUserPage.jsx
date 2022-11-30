import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminAddUserPage from "./AdminAddUserPage";
import { useRecoilState } from "recoil";
import { userDataState } from "../../../recoil/adminDataStates";
import axios from "axios";

function AdminCheckUserPage() {
  const [userDataG, setUserDataG] = useRecoilState(userDataState);
  useEffect(() => {}, []);

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
      <AdminAddUserPage
        toggleAddUser={toggleAddUser}
        getToggleAddUser={getToggleAddUser}
      />
      <Table>
        <tr>
          <TD>이름</TD>
          <TD>ID</TD>
          <TD>유저구분</TD>
          <TD>신청학점</TD>
          <TD>최대학점</TD>
        </tr>
        <tr>
          <TD colSpan={5}>
            <button onClick={onClickOpenAddUser}>유저 추가</button>
          </TD>
        </tr>
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
    </Wrapper>
  );
}
export default AdminCheckUserPage;

const Wrapper = styled.div`
  width: 100%;
  height: 820px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`;

const TD = styled.td`
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 14px;
  background-color: #ffffff;
  border-bottom: 1px solid black;
`;
const Table = styled.table`
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;

const SignInButton = styled.button`
  display: block;
  width: 30%;
  height: 50%;
`;
