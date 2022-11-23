import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentPageState } from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userPrevRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import PrevRegisterFilter from "./PrevRegisterFilter";
import PrevRegisterList from "./PrevRegisterList";
import MyPrevRegisterList from "./MyPrevRegisterList";
import axios from "axios";

function PrevRegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userPRG, setUserPRG] = useRecoilState(userPrevRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/prev-register") {
      setCurrentPageG("prev-register");
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
    axios.get("/api/prevGet").then((res) => {
      setUserPRG(res.data);
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
