import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {currentPageState, serverTimeState} from "../../recoil/currentStates";
import {
  userInfoState,
  courseListState,
  userPrevRegisterState,
  userRegisterState,
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
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [userPRG, setUserPRG] = useRecoilState(userPrevRegisterState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
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
      .catch((error) => {
        navigate("/");
      });
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
    axios.get("/api/prevGet").then((res) => {
      setUserPRG(res.data);
    });
    axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
    // 잠깐 테스트용
    // axios.get("/api/adminSubjectGet").then((res) => {
    //   console.log(res.data);
    // });
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
