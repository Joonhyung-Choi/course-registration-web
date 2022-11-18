import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import { courseListState } from "../../recoil/userDataStates";

import styled from "styled-components";

import PrevRegisterFilter from "./PrevRegisterFilter";
import PrevRegisterList from "./PrevRegisterList";
import MyPrevRegisterList from "./MyPrevRegisterList";

function PrevRegisterPage() {
  const location = useLocation();
  const courseListG = useRecoilValue(courseListState);

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/prev-register") {
      setCurrentPageG("prev-register");
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
        <PrevRegisterBox>
          <PrevRegisterFilter getFilteringList={getFilteringList} />
          <PrevRegisterList filteringList={filteringList} />
        </PrevRegisterBox>
        <MyPrevRegisterBox>
          <Hr />
          <MyPrevRegisterList />
        </MyPrevRegisterBox>
      </SizingBox>
    </Wrapper>
  );
}

export default PrevRegisterPage;

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
const PrevRegisterBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyPrevRegisterBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
`;
