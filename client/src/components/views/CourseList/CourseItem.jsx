import React,{} from 'react';
import styled from 'styled-components';

function CourseItem(props){

    return(
        <tr>
            <td name={props.indexNumber}></td>
            <td name={props.courseDepartment}></td>
            <td name={props.courseGrade}></td>
            <td name={props.courseName}></td>
            <td name={props.courseNumber}></td>
            <td name={props.courseDistribution}></td>
            <td name={props.courseClassification}></td>
            <td name={props.courseCredit}></td>
            <td name={props.courseMaxNumber}></td>
            <td name={props.coursePreRequest}></td>
            <td name={props.courseRequest}></td>
            <td name={props.courseTime}></td>
            <td name={props.courseProfessor}></td>
            <td name={props.courseSortation}></td>
            <td name={props.courseTheory}></td>
            <td name={props.coursePractice}></td>
            <td name={props.courseArea}></td>
            <td name={props.courseNote}></td>
        </tr>
    );
}

export default CourseItem;