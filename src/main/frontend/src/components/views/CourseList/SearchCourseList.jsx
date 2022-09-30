import React,{} from 'react';
import styled from 'styled-components';

import SearchCourseItem from './SearchCourseItem';

const Wrapper = styled.div`
    width: 100%;
    height:100%;
    overflow:auto;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    overflow-y: auto;
    overflow-x: visible;
    &::-webkit-scrollbar{
        width: 10px;
        height: 5px;
        boder-radius: 10px;
    }
    &::-webkit-scrollbar-track{
        background:rgba(255,255,255,0,0);
    }
    &::-webkit-scrollbar-thumb{
        background:rgba(0,0,0,0.2);
        background-clip:padding-box;
        border: 2px solid transparent;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb:hover{
        background:rgba(0,0,0,0.3);
        background-clip:padding-box;
        border: 1.5px solid transparent;
        border-radius: 100px;
    }
`;

const Table = styled.table`
    width:100%;
    background-color: white;
    margin:0px;
    padding:0px;
    border-spacing:0px;
    border-style:none;
`;

const Tr = styled.tr`
    width:100%;
`;

const Th = styled.th`
    padding: 7px;
    padding-bottom:5px;
    margin:0px;
    font-size: 0.85rem;
    background-color: #FFCC1D;
    color: #ffffff;
    border:0px;
    position: sticky;
	top: 0;
`;

function SearchCourseList(props){

    return (
        <Wrapper>
            <Table>
                <Tr>
                    <Th name="indexNumber" style={{borderTopLeftRadius:'15px'}}>No.</Th>
                    <Th name="courseDepartment">개설학과</Th>
                    <Th name="courseGrade">학년</Th>
                    <Th name="courseName">교과목명</Th>
                    <Th name="courseNumber">과목번호</Th>
                    <Th name="courseDistribution">분반</Th>
                    <Th name="courseClassification">이수구분</Th>
                    <Th name="courseCredit">학점</Th>
                    <Th name="courseMaxNumber">정원</Th>
                    <Th name="coursePreRequest">예비신청(비율)</Th>
                    <Th name="courseRequest">수강신청</Th>
                    <Th name="courseTime">수업시간</Th>
                    <Th name="courseProfessor">담당교수</Th>
                    <Th name="courseSortation">수업구분</Th>
                    <Th name="courseTheory">이론</Th>
                    <Th name="coursePractice">실습</Th>
                    <Th name="courseArea">영역</Th>
                    <Th name="courseNote" style={{borderTopRightRadius:'15px'}}>비고</Th>
                </Tr>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
                <SearchCourseItem/>
            </Table>
        </Wrapper>
    );
}

export default SearchCourseList;