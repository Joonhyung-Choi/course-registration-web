import React from "react";
import { useLocation } from "react-router-dom";

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
  const locate = useLocation();
  const courseList = locate.state.courseList;

  return (
    <Wrapper>
      <SizingBox>
        <SearchCourseFilter />
        <SearchCourseList courseList={courseList} />
      </SizingBox>
    </Wrapper>
  );
}

export default SearchCoursePage;
