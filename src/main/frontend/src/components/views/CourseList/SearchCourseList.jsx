import React from "react";
import styled from "styled-components";
import axios from "axios";

import SearchCourseItem from "./SearchCourseItem";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  overflow-y: auto;
  overflow-x: visible;
  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    boder-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
    background-clip: padding-box;
    border: 1.5px solid transparent;
    border-radius: 100px;
  }
`;

const Table = styled.table`
  width: 100%;
  background-color: white;
  margin: 0px;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
`;

const Tr = styled.tr`
  width: 100%;
`;

const Th = styled.th`
  padding: 0.45vw;
  padding-bottom: 0.23vw;
  margin: 0px;
  font-size: 0.9rem;
  background-color: #ffcc1d;
  color: #ffffff;
  border: 0px;
  position: sticky;
  top: 0;
`;

function SearchCourseList(props) {
  const courseListsRes = axios.get("/api/test");
  const courseLists = courseListsRes.then((res)=>{
    return res.data.content;
  });

  return (
    <Wrapper>
      <Table>
        <Tr>
          <Th name="id" style={{ borderTopLeftRadius: "15px" }}>
            No.
          </Th>
          <Th name="department">개설학과</Th>
          <Th name="grade">학년</Th>
          <Th name="divison">과목이름</Th>
          <Th name="subject_id">과목코드</Th>
          <Th name="subject_type">이수구분</Th>
          <Th name="grades">학점</Th>
          <Th name="max_count">정원</Th>
          <Th name="register_count">신청인원</Th>
          <Th name="subject_time">수업시간</Th>
          <Th name="professor" style={{ borderTopRightRadius: "15px" }}>
            담당교수
          </Th>
          {/*<Th name="courseSortation">수업구분</Th>
                    <Th name="coursePreRequest">예비신청(비율)</Th>--------------------
                    <Th name="courseTheory">이론</Th>
                    <Th name="coursePractice">실습</Th>
                    <Th name="courseArea">영역</Th>
                    <Th name="courseNote" style={{borderTopRightRadius:'15px'}}>비고</Th> */}
          {/* <Th name="courseDistribution">분반</Th> */}
        </Tr>
        {Object.entries(courseLists).map((entrie) => (
          <SearchCourseItem key={entrie.subject_id} courseList={entrie} />
        ))}
      </Table>
    </Wrapper>
  );
}

export default SearchCourseList;
