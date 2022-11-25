import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {currentPageState, serverTimeState} from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import SearchCourseList from "./SearchCourseList";
import SearchCourseFilter from "./SearchCourseFilter";
import axios from "axios";

function SearchCoursePage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // current states
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
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
    axios.get("/api/time").then((res) => {
      let time = res.data.split(":");
      time[2] = time[2].split(".")[0];
      const second =
          Number(time[2]) + Number(time[1]) * 60 + Number(time[0]) * 3600;
      setServerTimeG(second);
    });
    axios.get("/api/courseListGet").then((res) => {
      setCourseListG(res.data.content);
    });
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
