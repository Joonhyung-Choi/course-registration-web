import React,{ useEffect, useState } from 'react';
import AdminMenubarPage from "./AdminMenubarPage";
import AdminCheckUserPage from "./AdminCheckUserPage";
import AdminCourseListPage from "./AdminCourseListPage";
import AdminCheckRegisterPage from "./AdminCheckRegisterPage";
import AdminControlPage from "./AdminControlPage";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { serverTimeState, currentErrorState } from "../../recoil/currentStates";
import axios from "axios";
import { userInfoState } from "../../recoil/userDataStates";

function AdminPage() {

  const navigate = useNavigate();
  const [menuState, setMenuState] = useState("CheckUser");
  const getMenuState = (menuState) => {
    setMenuState(menuState);
  }

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



  const choosePage = () =>{
    switch(menuState){
      case "checkUser" :
        return <AdminCheckUserPage/>
      case "courseList" :
        return <AdminCourseListPage/>
      case "checkRegister" :
        return <AdminCheckRegisterPage/>
      case "Control" :
        return <AdminControlPage/>
    }
  }

  const Wrapper = styled.div`
    width : 100%;
    height : 100%;
  `
  return (
    <Wrapper>
      <AdminMenubarPage getMenuState={getMenuState}/>
      {choosePage()}

    </Wrapper>

  );
}

export default AdminPage;
