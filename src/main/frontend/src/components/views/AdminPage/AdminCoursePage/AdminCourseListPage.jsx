import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentAdminPageState,
  subjectDataState,
} from "../../../recoil/adminDataStates";

function AdminCourseListPage() {
  const location = useLocation();
  const setCurrentPageG = useSetRecoilState(currentAdminPageState);
  const subjectDataG = useRecoilValue(subjectDataState);

  useEffect(() => {
    if (location.pathname === "/mayo-admin/admin-course") {
      setCurrentPageG("admin-course");
    }
  });

  return (
    <Wrapper>
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
