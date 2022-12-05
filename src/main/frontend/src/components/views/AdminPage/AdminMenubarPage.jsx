import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { serverTimeState } from "../../recoil/currentStates";
import { currentAdminPageState } from "../../recoil/adminDataStates";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminMenubarPage() {
  const navigate = useNavigate();
  const [currentPageG, setCurrentPageG] = useRecoilState(currentAdminPageState);
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
      setCurrentPageG("");
      console.log("logout");
      navigate("/");
    });
  };
  // menuBtn event
  const onclickMenuButton1 = () => {
    setCurrentPageG("");
    navigate("/mayo-admin");
  };
  const onclickMenuButton2 = () => {
    setCurrentPageG("admin-course");
    navigate("/mayo-admin/admin-course");
  };
  const onclickMenuButton3 = () => {
    setCurrentPageG("admin-register");
    navigate("/mayo-admin/admin-register");
  };
  const onclickMenuButton4 = () => {
    setCurrentPageG("admin-control");
    navigate("/mayo-admin/admin-control");
  };
  return (
    <Wrapper>
      <MenubarNav>
        <MenubarUl>
          <MenubarLi currentPageG={currentPageG}>
            <MenuButton
              currentPageG={currentPageG}
              value={""}
              onClick={onclickMenuButton1}
            >
              전체사용자
            </MenuButton>
          </MenubarLi>
          <MenubarLi currentPageG={currentPageG}>
            <MenuButton
              currentPageG={currentPageG}
              value={"admin-course"}
              onClick={onclickMenuButton2}
            >
              전체과목
            </MenuButton>
          </MenubarLi>
          <MenubarLi currentPageG={currentPageG}>
            <MenuButton
              currentPageG={currentPageG}
              value={"admin-register"}
              onClick={onclickMenuButton3}
            >
              수강신청현황
            </MenuButton>
          </MenubarLi>
          <MenubarLi2 currentPageG={currentPageG}>
            <MenuButton
              currentPageG={currentPageG}
              value={"admin-control"}
              onClick={onclickMenuButton4}
            >
              서버관리
            </MenuButton>
          </MenubarLi2>
        </MenubarUl>
      </MenubarNav>
      <ServerTime>
        {fillZero(2, parseInt(serverTimeG / 3600))} :{" "}
        {fillZero(2, parseInt((serverTimeG % 3600) / 60))} :{" "}
        {fillZero(2, (serverTimeG % 3600) % 60)}
      </ServerTime>
      <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
    </Wrapper>
  );
}
export default AdminMenubarPage;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 45px;
  box-shadow: 0px 2px 9px -2px #111;
`;
const MenubarNav = styled.nav`
  display: flex;
  width: auto;
  height: 100%;
`;
const MenubarUl = styled.ul`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const MenubarLi2 = styled.li`
  display: flex;
  position: relative;
  list-style: none;
  float: left;
  display: block;
  width: 110px;
  height: 100%;
  border-left: none;
  text-align: center;
`;
const MenubarLi = styled.li`
  display: flex;
  position: relative;
  list-style: none;
  float: left;
  display: block;
  width: 110px;
  height: 100%;
  border-left: none;
  text-align: center;
  &:after {
    display: flex;
    position: absolute;
    content: "";
    top: 10px;
    right: 0px;
    width: 1.3px;
    height: 25px;
    background-color: #777;
  }
`;
const MenuButton = styled.button`
  height: 100%;
  width: 100%;
  font-size: 13px;
  color: ${(props) => (props.value === props.currentPageG ? "#fff" : "#999")};
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
const ServerTime = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 82px;
  font-size: 13px;
  margin-bottom: 5px;
`;
const LogoutBtn = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 13px;
  padding: 6px;
  margin: 5px 14px;
  background: #616161;
  border-radius: 4px;
  cursor: pointer;
`;
