import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {useRecoilState} from "recoil";
import {currentPageState} from "../../recoil/currentPageStates";

import styled from "styled-components";

import SearchCourseList from "./SearchCourseList";
import SearchCourseFilter from "./SearchCourseFilter";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

const SizingBox = styled.div`
  width: 95%;
  height: 95%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

function SearchCoursePage(props) {
  const location = useLocation();
  const courseList = location.state.courseList;

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(()=>{
    if(location.pathname==="/mayo-main/search-course"){
      setCurrentPageG('search-course');
    }
  },[]);

  // filtering
  const [filteringList, setFilteringList] = useState(courseList);
  const getFilteringList = (filteringList) => {
    setFilteringList(filteringList);
  };

  return (
    <Wrapper>
      <SizingBox>
        <SearchCourseFilter
          courseList={courseList}
          getFilteringList={getFilteringList}
        />
        <SearchCourseList filteringList={filteringList} />
      </SizingBox>
    </Wrapper>
  );
}

export default SearchCoursePage;
