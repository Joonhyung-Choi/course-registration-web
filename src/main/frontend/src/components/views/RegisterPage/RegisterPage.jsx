import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPageState,
  registerSwitchState,
} from "../../recoil/currentStates";
import { courseListState } from "../../recoil/userDataStates";

import styled from "styled-components";

import PrevRegisterFilter from "./RegisterFilter";
import RegisterSwitch from "./RegisterSwitch";
import RegisterList from "./RegisterList";
import MyRegisterList from "./MyRegisterList";

function RegisterPage() {
  const location = useLocation();
  const courseListG = useRecoilValue(courseListState);
  const registerSwitchG = useRecoilValue(registerSwitchState);

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/register") {
      setCurrentPageG("register");
    }
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
          <PrevRegisterFilter getFilteringList={getFilteringList} />
          <RegisterSwitch />
          {registerSwitchG ? (
            <RegisterList filteringList={filteringList} />
          ) : (
            <MyRegisterList />
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
