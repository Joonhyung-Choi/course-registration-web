// 수강신청 표 컴포넌트

import React, { useState } from "react";
import styled from "styled-components";

import CourseItem from "./CourseItem.jsx";

const Wrapper = styled.div`
  margin: 10px;
`;

const Table = styled.table`
  background-color: #ffcc1d;
  color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: auto;
  font-size: 10pt;
`;

const Tr = styled.tr`
  border-bottom: 2px solid #ffca1d3b;
`;

const Td = styled.td`
  padding: 7px;
  padding-bottom: 3px;
  border-bottom: solid 1px white;
  border-left: solid 1px white;
`;

// 표에서 각 칸마다 왼쪽에 구분선이 있는데 첫번째 열은 외곽선 제거
const TdFirst = styled(Td)`
  border-left: 0;
`;

const RegisterButton = styled.button`
  background-color: #ff8000;
  margin: auto;
  border: 0;
  border-radius: 4px;
  &:active {
    background-color: #e06000;
  }
`;

// 강의 정보 데이터 (하드코딩)

const classInfo = [
  {
    indexNumber: 1,
    courseDepartment: "컴퓨터공학과",
    courseGrade: 1,
    courseName: "C프로그래밍언어II",
    courseNumber: 13025,
    courseDistribution: 1,
    courseClassification: "전공기초",
    courseCredit: 3,
    courseMaxNumber: 30,
    coursePreRequest: 12,
    courseRequest: 22,
    courseTime: "월1,2,3(이405)",
    courseProfessor: "공동환",
    courseSortation: "실기",
    courseTheory: 0,
    coursePractice: 3,
    courseArea: null,
    courseNode: null,
  },

  {
    indexNumber: 2,
    courseDepartment: "ICT융합학과",
    courseGrade: 1,
    courseName: "자료구조와알고리즘",
    courseNumber: 14580,
    courseDistribution: 1,
    courseClassification: "전공필수",
    courseCredit: 3,
    courseMaxNumber: 30,
    coursePreRequest: 41,
    courseRequest: 30,
    courseTime: "수1,2,3(이101)",
    courseProfessor: "김효석",
    courseSortation: "이론/실기",
    courseTheory: 1,
    coursePractice: 2,
    courseArea: null,
    courseNode: null,
  },

  {
    indexNumber: 3,
    courseDepartment: "컴퓨터공학과",
    courseGrade: 3,
    courseName: "디지털영상처리",
    courseNumber: 13028,
    courseDistribution: 1,
    courseClassification: "전공선택",
    courseCredit: 3,
    courseMaxNumber: 30,
    coursePreRequest: 7,
    courseRequest: 9,
    courseTime: "화6,7,8(이101)",
    courseProfessor: "김형준",
    courseSortation: "이론/실기",
    courseTheory: 2,
    coursePractice: 1,
    courseArea: null,
    courseNode: null,
  },

  {
    indexNumber: 4,
    courseDepartment: "컴퓨터공학과",
    courseGrade: 3,
    courseName: "오픈소스소프트웨어기반캡스톤디자인",
    courseNumber: 15231,
    courseDistribution: 1,
    courseClassification: "전공필수",
    courseCredit: 3,
    courseMaxNumber: 30,
    coursePreRequest: 26,
    courseRequest: 24,
    courseTime: "목1,2,3(이204)",
    courseProfessor: "공동환",
    courseSortation: "실기",
    courseTheory: 0,
    coursePractice: 3,
    courseArea: null,
    courseNode: null,
  },

  {
    indexNumber: 5,
    courseDepartment: "컴퓨터공학과",
    courseGrade: 4,
    courseName: "졸업프로젝트II",
    courseNumber: 13591,
    courseDistribution: 1,
    courseClassification: "전공필수",
    courseCredit: 3,
    courseMaxNumber: 30,
    coursePreRequest: 21,
    courseRequest: 27,
    courseTime: "금6,7,8(이204)",
    courseProfessor: "유대현",
    courseSortation: "실기",
    courseTheory: 0,
    coursePractice: 3,
    courseArea: null,
    courseNode: null,
  },
];

// 교과목 리스트 컴포넌트
function CourseList(props) {
  // 강의 정보 로드(이 부분을 DB 데이터로 받아오게끔 하면 됨)
  let loadClassInfo = classInfo.map(function (element) {
    return (
      <CourseItem
        classinfo={element}
        addClass={props.addClass}
        delClass={props.delClass}
        currentClass={props.currentClass}
      />
    );
  });

  return (
    <Wrapper>
      <Table>
        {/* 교과목 리스트 표 맨 윗부분 */}
        <Tr>
          <TdFirst name="indexNumber">No.</TdFirst>
          <Td name="courseDepartment">개설학과</Td>
          <Td name="courseGrade">학년</Td>
          <Td name="courseName">교과목명</Td>
          <Td name="courseNumber">과목번호</Td>
          <Td name="courseDistribution">분반</Td>
          <Td name="courseClassification">이수구분</Td>
          <Td name="courseCredit">학점</Td>
          <Td name="courseMaxNumber">정원</Td>
          <Td name="coursePreRequest">예비신청(비율)</Td>
          <Td name="courseRequest">수강신청</Td>
          <Td name="courseTime">수업시간</Td>
          <Td name="courseProfessor">담당교수</Td>
          <Td name="courseSortation">수업구분</Td>
          <Td name="courseTheory">이론</Td>
          <Td name="coursePractice">실습</Td>
          <Td name="courseArea">영역</Td>
          <Td name="courseNote">비고</Td>
          <Td name="courseRegister">신청하기</Td>
        </Tr>
        {/* 교과목 리스트 표 교과목 내용 부분 */}
        {loadClassInfo}
      </Table>
    </Wrapper>
  );
}

export default CourseList;
