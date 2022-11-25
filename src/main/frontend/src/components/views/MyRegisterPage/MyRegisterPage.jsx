import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState, userRegisterState } from "../../recoil/userDataStates";
import { currentPageState, serverTimeState } from "../../recoil/currentStates";
import styled from "styled-components";
import TimeTable from "./TimeTable";
import MyCourseList from "./MyCourseList";
import axios from "axios";

// 임의의 수강신청 목록 하드코딩
const classInfo = [
  {
    id: 1,
    major: "컴퓨터공학과",
    grade: 1,
    subject_name: "C프로그래밍언어II",
    subjectId: 13025,
    subject_type: "전공기초",
    score: 3,
    max_count: 30,
    register_count: 22,
    subject_time: "월1,2,3",
    professor: "공동환",
  },

  {
    id: 2,
    major: "ICT융합학과",
    grade: 1,
    subject_name: "자료구조와알고리즘",
    subjectId: 14580,
    subject_type: "전공필수",
    score: 3,
    max_count: 30,
    register_count: 30,
    subject_time: "수2,3,4",
    professor: "김효석",
  },

  {
    id: 3,
    major: "컴퓨터공학과",
    grade: 3,
    subject_name: "디지털영상처리",
    subjectId: 13028,
    subject_type: "전공선택",
    score: 3,
    max_count: 30,
    register_count: 9,
    subject_time: "화3,4,5",
    professor: "김형준",
  },

  {
    id: 4,
    major: "컴퓨터공학과",
    grade: 3,
    subject_name: "오픈소스소프트웨어기반캡스톤디자인",
    subjectId: 15231,
    subject_type: "전공필수",
    score: 3,
    max_count: 30,
    register_count: 24,
    subject_time: "목4,5,6",
    professor: "공동환",
  },

  {
    id: 5,
    major: "컴퓨터공학과",
    grade: 4,
    subject_name: "졸업프로젝트II",
    subjectId: 13591,
    subject_type: "전공필수",
    score: 3,
    max_count: 30,
    register_count: 27,
    subject_time: "금4,5,6",
    professor: "유대현",
  },
];

function MyRegisterPage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // 예비수강신청 목록 연동시켜놓은 상태, 나중에 수강신청 목록으로 바꿀 예정
  // const register = classInfo; // 하드코딩 데이터 테스트용

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  const [serverTimeG, setServerTimeG] = useRecoilState(serverTimeState);
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/my-register") {
      setCurrentPageG("my-register");
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
    axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
  }, []);

  return (
    <Wrapper>
      <SizingBox>
        <MyRegisterBox>
          <MyCourseList /> {/*수강 내역 리스트 컴포넌트*/}
          <Hr />
        </MyRegisterBox>
        <TimeTableBox>
          <TimeTable /> {/*시간표 컴포넌트*/}
        </TimeTableBox>
      </SizingBox>
    </Wrapper>
  );
}

export default MyRegisterPage;

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
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;
const Hr = styled.div`
  margin: 10px;
`;
const MyRegisterBox = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;
const TimeTableBox = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
`;
// const DivisionLine = styled.div`
//   width: 90vw;
//   height: 10px;
//   margin: 20px auto;
//   background-color: #BBBBBB;
//   border-radius: 5px;
// `
