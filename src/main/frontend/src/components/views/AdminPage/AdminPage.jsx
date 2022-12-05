import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminMenubarPage from "./AdminMenubarPage";
import AdminCheckUserPage from "./AdminUserPage/AdminCheckUserPage";
import AdminCourseListPage from "./AdminCoursePage/AdminCourseListPage";
import AdminCheckRegisterPage from "./AdminRegisterPage/AdminCheckRegisterPage";
import AdminControlPage from "./AdminControlPage/AdminControlPage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { currentErrorState } from "../../recoil/currentStates";
import {
  userDataState,
  registerDataState,
  subjectDataState,
} from "../../recoil/adminDataStates";
import axios from "axios";
import { userInfoState } from "../../recoil/userDataStates";

function AdminPage() {
  const navigate = useNavigate();
  const setUserInfoG = useSetRecoilState(userInfoState);
  const setCurrentErrorG = useSetRecoilState(currentErrorState);
  const setUserDataG = useSetRecoilState(userDataState);
  const setSubjcetDataG = useSetRecoilState(subjectDataState);
  const setRegisterDataG = useSetRecoilState(registerDataState);

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
      .catch(() => {
        navigate("/");
        setCurrentErrorG(["인가되지 않은 접근입니다.", true]);
        setTimeout(function () {
          setCurrentErrorG(["인가되지 않은 접근입니다.", false]);
        }, 2000);
      });

    axios
      .get("/api/adminUserGet")
      .then((res) => {
        setUserDataG(res.data);
      })
      .catch(function () {});

    axios
      .get("/api/adminSubjectGet")
      .then((res) => {
        setSubjcetDataG(res.data);
      })
      .catch(function () {});

    axios
      .get("/api/adminUserSubjectGet")
      .then((res) => {
        setRegisterDataG(res.data);
      })
      .catch(function () {});
  }, []);

  return (
    <Wrapper>
      <AdminMenubarPage />
      <Routes>
        <Route path="" element={<AdminCheckUserPage />} />
        <Route path="admin-course" element={<AdminCourseListPage />} />
        <Route path="admin-register" element={<AdminCheckRegisterPage />} />
        <Route path="admin-control" element={<AdminControlPage />} />
      </Routes>
    </Wrapper>
  );
}

export default AdminPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
  color: #fff;
`;
