// 각 수강 과목 별 컴포넌트
import React from "react";
import styled from "styled-components";

function MyCourseItem(props) {
  // 숫자 앞에 0 붙이는 함수 (ex. 1 => 001 )
  function addZeroes(n) {
    if (parseInt(n / 10) === 0) return "00" + n;
    else if (parseInt(n / 100) === 0) return "0" + n;
    else return "" + n;
  }
  return (
    <Tr>
      <Td name={props.idx}>{props.idx + 1}</Td>
      <Td name={props.item.major}>{props.item.major}</Td>
      <Td name={props.item.grade}>{props.item.grade}</Td>
      <Td name={props.item.subject_name}>{props.item.subject_name}</Td>
      <Td name={props.item.subjectId}>{props.item.subjectId}</Td>
      <Td name={props.item.subject_type}>{props.item.subject_type}</Td>
      <Td name={props.item.score}>{props.item.score}</Td>
      <Td name={props.item.max_count}>{props.item.max_count}</Td>
      <Td name={props.item.register_count}>{props.item.register_count}</Td>
      <Td name={props.item.subject_time}>{props.item.subject_time}</Td>
      <Td name={props.item.professor}>{props.item.professor}</Td>
      {/* <Td name={props.item.courseSortation}></Td>
                <Td name={props.item.courseClassification}></Td>
                <Td name={props.item.courseDistribution}></Td>
                <Td name={props.item.coursePreRequest}></Td>
                <Td name={props.item.courseTheory}></Td>
                <Td name={props.item.coursePractice}></Td>
                <Td name={props.item.courseNote}></Td> */}
    </Tr>
  );
}

export default MyCourseItem;

const Tr = styled.tr``;
const Td = styled.td`
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 12px;
  background-color: #ffffff;
  border-bottom: 1px solid #aaaaaa;
`;
