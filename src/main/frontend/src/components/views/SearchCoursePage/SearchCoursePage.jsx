import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import { userInfoState, courseListState } from "../../recoil/userDataStates";
import styled from "styled-components";
import SearchCourseList from "./SearchCourseList";
import SearchCourseFilter from "./SearchCourseFilter";
import axios from "axios";

function SearchCoursePage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // current states
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/search-course") {
      setCurrentPageG("search-course");
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
    axios.get("/api/courseListGet").then((res) => {
      setCourseListG(res.data.content);
    });
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
