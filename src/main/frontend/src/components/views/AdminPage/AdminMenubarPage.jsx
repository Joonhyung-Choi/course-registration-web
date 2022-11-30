import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { serverTimeState } from "../../recoil/currentStates";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AdminMenubarPage() {
  const navigate = useNavigate();
  // server time
  const serverTimeG = useRecoilValue(serverTimeState);
  function fillZero(width, time) {
    const str = time + "";
    return str.length >= width
      ? str
      : new Array(width - str.length + 1).join("0") + str; //남는 길이만큼 0으로 채움
  }
  // logout
  const onClickLogout = () => {
    axios.post("/api/logout").then((res) => {
      console.log("logout");
      navigate("/");
    });
  };
  // menuBtn event
  const onclickMenuButton1 = () => {
    navigate("/mayo-admin");
  };
  const onclickMenuButton2 = () => {
    navigate("/mayo-admin/admin-course");
  };
  const onclickMenuButton3 = () => {
    navigate("/mayo-admin/admin-register");
  };
  const onclickMenuButton4 = () => {
    navigate("/mayo-admin/admin-control");
  };
  return (
    <Wrapper>
      <MenubarNav>
        <MenubarUl>
          <MenubarLi>
            <MenuButtonA onClick={onclickMenuButton1}>전체사용자</MenuButtonA>
          </MenubarLi>
          <MenubarLi>
            <MenuButtonA onClick={onclickMenuButton2}>전체과목</MenuButtonA>
          </MenubarLi>
          <MenubarLi>
            <MenuButtonA onClick={onclickMenuButton3}>수강신청현황</MenuButtonA>
          </MenubarLi>
          <MenubarLi>
            <MenuButtonA onClick={onclickMenuButton4}>서버관리</MenuButtonA>
          </MenubarLi>
        </MenubarUl>
      </MenubarNav>
      <div>
        {fillZero(2, parseInt(serverTimeG / 3600))} :{" "}
        {fillZero(2, parseInt((serverTimeG % 3600) / 60))} :{" "}
        {fillZero(2, (serverTimeG % 3600) % 60)}
      </div>
      <button onClick={onClickLogout}>로그아웃</button>
    </Wrapper>
  );
}
export default AdminMenubarPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;

const MenubarNav = styled.nav``;

const MenubarUl = styled.ul``;

const MenubarLi = styled.li`
  list-style: none;
  float: left;
  display: block;
  width: 10%;
  height: 100px;
  border: 1px solid black;
  text-align: center;
  box-sizing: border-box;
`;
const MenuButtonA = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ecd1ae79;
  text-decoration: none;
  line-height: 90px;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;
