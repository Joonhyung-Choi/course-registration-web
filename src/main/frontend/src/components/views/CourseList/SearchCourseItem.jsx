import React,{} from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
`;

const Td = styled.td`
    border:0px;
    padding: 7px;
    margin:0px;
    font-size: 0.8rem;
    background-color: #FFFFFF;
    border-bottom:1px solid gray;
`;

function SearchCourseItem(props){

    return(
        <Tr>
            <Td name={props.indexNumber}></Td>
            <Td name={props.courseDepartment}></Td>
            <Td name={props.courseGrade}></Td>
            <Td name={props.courseName}></Td>
            <Td name={props.courseNumber}></Td>
            <Td name={props.courseDistribution}></Td>
            <Td name={props.courseClassification}></Td>
            <Td name={props.courseCredit}></Td>
            <Td name={props.courseMaxNumber}></Td>
            <Td name={props.coursePreRequest}></Td>
            <Td name={props.courseRequest}></Td>
            <Td name={props.courseTime}></Td>
            <Td name={props.courseProfessor}></Td>
            <Td name={props.courseSortation}></Td>
            <Td name={props.courseTheory}></Td>
            <Td name={props.coursePractice}></Td>
            <Td name={props.courseArea}></Td>
            <Td name={props.courseNote}></Td>
        </Tr>
    );
}

export default SearchCourseItem;