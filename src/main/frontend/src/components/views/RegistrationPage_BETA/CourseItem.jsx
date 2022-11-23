// 교과목 리스트 표에 들어갈 각 과목 정보 컴포넌트
import React, { useState } from "react";
import styled from "styled-components";

// 교과목 리스트 표에 들어갈 각 과목 정보 컴포넌트
function CourseItem(props) {
  const [classStatus, setClassStatus] = useState(false);
  const [statusShow, setStatusShow] = useState("수강신청");

  // 수강 신청 및 신청 취소 토글 함수
  function classRegist() {
    setClassStatus((classStatus) => !classStatus);
    // 수강 신청 취소 시
    if (classStatus === true) {
      alert("신청 취소되었습니다.");
      setStatusShow("수강신청");
      props.delClass(props.classinfo.indexNumber);
      console.log(props.classinfo);
    }
    // 수강 신청 시
    else {
      alert("신청되었습니다.");
      setStatusShow("신청취소");
      props.addClass(props.classinfo);
      console.log(props.classinfo);
    }
  }

  // 숫자 앞에 0 붙이는 함수 (ex. 1 => 001 )
  function addZeroes(n) {
    if (parseInt(n / 10) === 0) return "00" + n;
    else if (parseInt(n / 100) === 0) return "0" + n;
    else return "" + n;
  }

  return (
    <Tr>
      <TdFirst>
        <div>{addZeroes(props.classinfo.indexNumber)}</div>
      </TdFirst>
      <Td>
        <div>{props.classinfo.courseDepartment}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseGrade + "학년"}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseName}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseNumber}</div>
      </Td>
      <Td>
        <div>{addZeroes(props.classinfo.courseDistribution)}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseClassification}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseCredit}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseMaxNumber}</div>
      </Td>
      <Td>
        <div>
          {props.classinfo.coursePreRequest +
            "(" +
            (
              (props.classinfo.coursePreRequest /
                props.classinfo.courseMaxNumber) *
              100
            ).toFixed(1) +
            "%)"}
        </div>
      </Td>
      <Td>
        <div>{props.classinfo.courseRequest}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseTime}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseProfessor}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseSortation}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseTheory}</div>
      </Td>
      <Td>
        <div>{props.classinfo.coursePractice}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseArea}</div>
      </Td>
      <Td>
        <div>{props.classinfo.courseNote}</div>
      </Td>
      <Td>
        <RegisterButton
          classStatus={classStatus}
          onClick={() => {
            classRegist();
          }}
        >
          {statusShow}
        </RegisterButton>
      </Td>
    </Tr>
  );
}

export default CourseItem;

const Tr = styled.tr`
  border-bottom: 2px solid #ffca1d3b;
`;
const Td = styled.td`
  padding: 7px;
  padding-bottom: 3px;
  border-left: solid 1px white;
  background-color: #fffdad;
  color: #000000;
`;
const TdFirst = styled(Td)`
  background-color: #ffcc1d;
  color: #ffffff;
  border-left: 0;
`;
const RegisterButton = styled.button`
  background-color: ${({ classStatus }) =>
    classStatus ? "#ff8000" : "#00a0ff"};
  margin: auto;
  border: 0;
  border-radius: 4px;
  &:active {
    background-color: ${({ classStatus }) =>
      classStatus ? "#e06000" : "#0080e0"};
  }
`;