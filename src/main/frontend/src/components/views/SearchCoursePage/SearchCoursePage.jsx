import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import { courseListState } from "../../recoil/userDataStates";

import styled from "styled-components";

import SearchCourseList from "./SearchCourseList";
import SearchCourseFilter from "./SearchCourseFilter";

function SearchCoursePage(props) {
  const location = useLocation();
  const courseListG = useRecoilValue(courseListState);

  // current states
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/search-course") {
      setCurrentPageG("search-course");
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
        <SearchCourseFilter getFilteringList={getFilteringList} />
        <SearchCourseList filteringList={filteringList} />
      </SizingBox>
    </Wrapper>
  );
}

export default SearchCoursePage;

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
