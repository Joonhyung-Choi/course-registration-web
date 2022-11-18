import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useRecoilState } from "recoil";
import { currentPageState } from "../../recoil/currentStates";

import styled from "styled-components";

import TimeTable from "./TimeTable";
import MyCourseList from "./MyCourseList";

// 임의의 수강신청 목록 하드코딩
const classInfo = [
  {
    id: 1,
    major: "컴퓨터공학과",
    grade: 1,
    subject_name: "C프로그래밍언어II",
    subject_id: 13025,
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
    subject_id: 14580,
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
    subject_id: 13028,
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
    subject_id: 15231,
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
    subject_id: 13591,
    subject_type: "전공필수",
    score: 3,
    max_count: 30,
    register_count: 27,
    subject_time: "금4,5,6",
    professor: "유대현",
  },
];

function MyRegisterPage(props) {
  const location = useLocation();
  // 예비수강신청 목록 연동시켜놓은 상태, 나중에 수강신청 목록으로 바꿀 예정
  // const register = classInfo; // 하드코딩 데이터 테스트용

  // current page
  const [currentPageG, setCurrentPageG] = useRecoilState(currentPageState);
  useEffect(() => {
    if (location.pathname === "/mayo-main/my-register") {
      setCurrentPageG("my-register");
    }
  }, []);

  return (
    <Wrapper>
      <SizingBox>
        <MyCourseList /> {/*수강 내역 리스트 컴포넌트*/}
        <hr />
        <TimeTable /> {/*시간표 컴포넌트*/}
        <button
          onClick={() => {
            //console.log(register);
            console.log(classInfo);
          }}
        >
          Test
        </button>
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
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

// const DivisionLine = styled.div`
//   width: 90vw;
//   height: 10px;
//   margin: 20px auto;
//   background-color: #BBBBBB;
//   border-radius: 5px;
// `
