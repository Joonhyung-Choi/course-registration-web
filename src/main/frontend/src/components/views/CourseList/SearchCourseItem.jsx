import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Tr = styled.tr``;

const Td = styled.td`
  border: 0px;
  padding: 0.3vw;
  margin: 0px;
  font-size: 0.8rem;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
`;

function SearchCourseItem(props) {
  // const [items, setItems] = useState([]);

  // useEffect(()=>{
  //     axios.get('/api/courses').them((res)=>{
  //         setItems(res.data)
  //         console.log(items);
  //     });
  // }, []);

  return (
    <Tr>
      <Td name={props.courseList.courseList.id}>{props.courseList.id}</Td>
      <Td name={props.courseList.department}>{props.courseList.department}</Td>
      <Td name={props.courseList.grade}>{props.courseList.grade}</Td>
      <Td name={props.courseList.divison}>{props.courseList.divison}</Td>
      <Td name={props.courseList.subject_id}>{props.courseList.subject_id}</Td>
      <Td name={props.courseList.subject_type}>{props.courseList.subject_type}</Td>
      <Td name={props.courseList.grades}>{props.courseList.grades}</Td>
      <Td name={props.courseList.max_count}>{props.courseList.max_count}</Td>
      <Td name={props.courseList.register_count}>{props.courseList.register_count}</Td>
      <Td name={props.courseList.subject_time}>{props.courseList.subject_time}</Td>
      <Td name={props.courseList.professor}>{props.courseList.professor}</Td>
      {/* <Td name={props.courseList.courseSortation}></Td>
            <Td name={props.courseList.courseClassification}></Td>
            <Td name={props.courseList.courseDistribution}></Td>
            <Td name={props.courseList.coursePreRequest}></Td>
            <Td name={props.courseList.courseTheory}></Td>
            <Td name={props.courseList.coursePractice}></Td>
            <Td name={props.courseList.courseArea}></Td>
            <Td name={props.courseList.courseNote}></Td> */}
    </Tr>
  );
}

export default SearchCourseItem;
