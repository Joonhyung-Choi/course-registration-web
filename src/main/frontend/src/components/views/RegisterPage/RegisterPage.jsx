import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageState,
  registerSwitchState,
} from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import RegisterFilter from "./RegisterFilter";
import RegisterSwitch from "./RegisterSwitch";
import PrevRegisterList from "./PrevRegisterList";
import RegisterList from "./RegisterList";
import MyRegisterList from "./MyRegisterList";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const registerSwitchG = useRecoilValue(registerSwitchState);
  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/register") {
      setCurrentPageG("register");
    }
    axios
      .post("/api/cookieGet")
      .then((res) => {
        setUserInfoG(res.data);
        if (res.data.userName === "") {
          navigate("/");
        }
      })
      .catch((error) => {});
    axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
  }, []);
  // filtering
  const [filteringList, setFilteringList] = useState(courseListG);
  const getFilteringList = (filteringList) => {
    setFilteringList(filteringList);
  };

  return (
    <Wrapper>
      <SizingBox>
        <RegisterBox>
          <RegisterFilter getFilteringList={getFilteringList} />
          <RegisterSwitch />
          {registerSwitchG ? (
            <PrevRegisterList filteringList={filteringList} />
          ) : (
            <RegisterList filteringList={filteringList} />
          )}
        </RegisterBox>
        <MyRegisterBox>
          <Hr />
          <MyRegisterList />
        </MyRegisterBox>
      </SizingBox>
    </Wrapper>
  );
}

export default RegisterPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const SizingBox = styled.div`
  width: 95%;
  height: 95%;
`;
const RegisterBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 50%;
  overflow: auto;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyRegisterBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
`;
