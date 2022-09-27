import React,{} from 'react';
import styled from 'styled-components';

import CourseItem from './CourseItem';

const Wrapper = styled.div`
    margin: 10px;
`;

const Table = styled.table`
    background-color: #FFCC1D;
    color: #ffffff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`;

const Tr = styled.tr`
    border-bottom: 2px solid #ffca1d3b;
`;

const Td = styled.td`
    padding: 7px;
    padding-bottom: 3px;
`;

function CourseList(props){

    return (
        <Wrapper>
            <Table>
                <Tr>
                    <Td name="indexNumber">No.</Td>
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
                </Tr>
                <CourseItem/>
            </Table>
        </Wrapper>
    );
}

export default CourseList;