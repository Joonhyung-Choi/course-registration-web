import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  currentAdminPageState,
  subjectDataState,
} from "../../../recoil/adminDataStates";
import AdminDeleteCourse from "./AdminDeleteCourse";
import AdminModifyCourse from "./AdminModifyCourse";
import AdminAddCoursePage from "./AdminAddCoursePage";

function AdminCourseListPage() {
  const location = useLocation();
  const [currentPageG, setCurrentPageG] = useRecoilState(currentAdminPageState);
  const [subjectDataG, setSubjectDataG] = useRecoilState(subjectDataState);

  useEffect(() => {
    if (location.pathname === "/mayo-admin/admin-course") {
      setCurrentPageG("admin-course");
    }
  });

  return (
    <Wrapper>
      {/* </AdminAddCoursePage> */}
      <InnerWrapper>
        <Table>
          <tr>
            <TH style={{ borderTopLeftRadius: "6px" }}>개설학과</TH>
            <TH>학년</TH>
            <TH>과목이름</TH>
            <TH>과목코드</TH>
            <TH>이수구분</TH>
            <TH>학점</TH>
            <TH>정원</TH>
            <TH>수강신청인원</TH>
            <TH>예비수강신청인원</TH>
            <TH>수업시간</TH>
            <TH style={{ borderTopRightRadius: "6px" }}>담당교수</TH>
            {/* <TH >과목 수정</TH>
            <TH style={{ borderTopRightRadius: "6px" }}>과목삭제</TH> */}
          </tr>
          {/* <tr>
            <TD_H colSpan={13} style={{ padding: "4px 0px" }}>
              <AddCourseButton>과목 추가</AddCourseButton>
            </TD_H>
          </tr> */}
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
              {/* <TD style={{ padding: "5.2px 0" }}>
                <AdminModifyCourse item={item} />
              </TD>
              <TD style={{ padding: "5.2px 0" }}>
                <AdminDeleteCourse item={item} />
              </TD> */}
            </tr>
          ))}
        </Table>
      </InnerWrapper>
    </Wrapper>
  );
}
export default AdminCourseListPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 45px);
  padding: 20px;
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
    background-clip: padding-box;
    border: 1.5px solid transparent;
    border-radius: 100px;
  }
`;
const TH = styled.th`
  position: sticky;
  top: 0;
  text-align: center;
  height: 30px;
  border: 0px;
  padding: 8px 0;
  font-size: 13px;
  background-color: #555;
`;
const TD_H = styled.td`
  position: sticky;
  top: 30px;
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 12px;
  border-bottom: 1px solid #111;
  background-color: #222;
`;
const TD = styled.td`
  text-align: center;
  border: 0px;
  padding: 8px 0;
  margin: 0px;
  font-size: 12px;
  border-bottom: 1px solid #111;
`;
const Table = styled.table`
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;

const AddCourseButton = styled.button`
  margin: auto;
  display: block;
  width: 230px;
  height: 23px;
  background-color: white;
  border: 2px solid #2b3a55;
  color: #2b3a55;
  border-radius: 7px;
  font-size: 14px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: #2b3a55;
    color: white;
  }
`;
