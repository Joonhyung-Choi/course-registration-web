import React from "react";
import styled from "styled-components";

const Tr = styled.tr``;

const Td = styled.td`
  border: 0px;
  padding: 5px 0;
  margin: 0px;
  font-size: 13px;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
`;

function SearchCourseItem(props) {

  return (
    <Tr>
        <Td name={props.item.id}>{props.item.id}</Td>
        <Td name={props.item.major}>{props.item.major}</Td>
        <Td name={props.item.grade}>{props.item.grade}</Td>
        <Td name={props.item.subject_name}>{props.item.subject_name}</Td>
        <Td name={props.item.subject_id}>{props.item.subject_id}</Td>
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

export default SearchCourseItem;
