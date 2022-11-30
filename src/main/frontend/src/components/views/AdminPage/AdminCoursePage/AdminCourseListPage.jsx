import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { subjectDataState } from "../../../recoil/adminDataStates";
import AdminDeleteCourse from "./AdminDeleteCourse";

function AdminCourseListPage() {
    const [subjectDataG, setSubjectDataG] = useRecoilState(subjectDataState);





    return (
        <Wrapper>
            <Table>
                <tr>
                    <TD>개설학과</TD>
                    <TD>학년</TD>
                    <TD>과목이름</TD>
                    <TD>과목코드</TD>
                    <TD>이수구분</TD>
                    <TD>학점</TD>
                    <TD>정원</TD>
                    <TD>수강신청인원</TD>
                    <TD>예비수강신청인원</TD>
                    <TD>수업시간</TD>
                    <TD>담당교수</TD>
                    <TD>과목삭제</TD>
                </tr>
                <tr>
                    <TD colSpan={12}>
                        <button>과목 추가</button>
                    </TD>
                </tr>
                {subjectDataG.map((item) => (
                    <tr>
                        <TD>{item.major}</TD>
                        <TD>{item.grade}</TD>
                        <TD>{item.subject_name}</TD>
                        <TD>{item.subjectId}</TD>
                        <TD>{item.subject_type}</TD>
                        <TD>{item.score}</TD>
                        <TD>{item.max_count}</TD>
                        <TD>{item.register_count}</TD>
                        <TD>{item.prev_register_count}</TD>
                        <TD>{item.subject_time}</TD>
                        <TD>{item.professor}</TD>
                        <TD>
                            <AdminDeleteCourse item={item}/>
                        </TD>
                    </tr>
                ))}
            </Table>
        </Wrapper>
    );
}
export default AdminCourseListPage;

const TD = styled.td`
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 14px;
  background-color: #ffffff;
  border-bottom: 1px solid black;
`
const Table = styled.table`
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;


const Wrapper = styled.div`
  width: 100%;
  height: 820px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`;
