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
      <Td name={props.id}></Td>
      <Td name={props.department}></Td>
      <Td name={props.grade}></Td>
      <Td name={props.divison}></Td>
      <Td name={props.subject_id}></Td>
      <Td name={props.subject_type}></Td>
      <Td name={props.grades}></Td>
      <Td name={props.max_count}></Td>
      <Td name={props.register_count}></Td>
      <Td name={props.subject_time}></Td>
      <Td name={props.professor}></Td>
      {/* <Td name={props.courseSortation}></Td>
            <Td name={props.courseClassification}></Td>
            <Td name={props.courseDistribution}></Td>
            <Td name={props.coursePreRequest}></Td>
            <Td name={props.courseTheory}></Td>
            <Td name={props.coursePractice}></Td>
            <Td name={props.courseArea}></Td>
            <Td name={props.courseNote}></Td> */}
    </Tr>
  );
}

export default SearchCourseItem;
