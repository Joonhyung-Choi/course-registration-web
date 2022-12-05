import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentAdminPageState,
  registerDataState,
} from "../../../recoil/adminDataStates";
import AdminCheckRegister from "./AdminCheckRegister";

function AdminCheckRegisterPage() {
  const location = useLocation();
  const setCurrentPageG = useSetRecoilState(currentAdminPageState);
  const registerDataG = useRecoilValue(registerDataState);

  let tempSubjectName = [];

  registerDataG.map((item) => {
    if (
      !tempSubjectName.map((i) => i.subject_name).includes(item.subject_name)
    ) {
      tempSubjectName.push({
        grade: item.grade,
        major: item.major,
        max_count: item.max_count,
        professor: item.professor,
        register_count: item.register_count,
        score: item.score,
        subjectId: item.subjectId,
        subject_name: item.subject_name,
        subject_time: item.subject_time,
        subject_type: item.subject_type,
        user: [],
      });
    }
    tempSubjectName.map((i) => {
      let dum = [];
      dum = registerDataG.filter((j) => {
        if (j.subject_name === i.subject_name) {
          return j.userEntity.userName;
        }
      });
      i.user = dum;
    });
  });

  useEffect(() => {
    if (location.pathname === "/mayo-admin/admin-register") {
      setCurrentPageG("admin-register");
    }
    registerDataG.map((item) => {
      if (
        !tempSubjectName.map((i) => i.subject_name).includes(item.subject_name)
      ) {
        tempSubjectName.push({
          grade: item.grade,
          major: item.major,
          max_count: item.max_count,
          professor: item.professor,
          register_count: item.register_count,
          score: item.score,
          subjectId: item.subjectId,
          subject_name: item.subject_name,
          subject_time: item.subject_time,
          subject_type: item.subject_type,
          user: [],
        });
      }
    });
    tempSubjectName.map((i) => {
      let dum = [];
      dum = registerDataG.filter((j) => {
        if (j.subject_name === i.subject_name) {
          return j.userEntity.userName;
        }
      });
      i.user = dum;
    });
  }, []);

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
            <TH>수업시간</TH>
            <TH>담당교수</TH>
            <TH style={{ borderTopRightRadius: "6px" }}>
              수강인원확인 (아이디/이름)
            </TH>
          </tr>
          {tempSubjectName.map((item) =>
            item.user.map((i, idx) => {
              if (idx === 0) {
                return (
                  <tr>
                    <TD rowSpan={item.user.length}>{item.major}</TD>
                    <TD rowSpan={item.user.length}>{item.grade}</TD>
                    <TD rowSpan={item.user.length}>{item.subject_name}</TD>
                    <TD rowSpan={item.user.length}>{item.subjectId}</TD>
                    <TD rowSpan={item.user.length}>{item.subject_type}</TD>
                    <TD rowSpan={item.user.length}>{item.score}</TD>
                    <TD rowSpan={item.user.length}>{item.max_count}</TD>
                    <TD rowSpan={item.user.length}>{item.register_count}</TD>
                    <TD rowSpan={item.user.length}>{item.subject_time}</TD>
                    <TD rowSpan={item.user.length}>{item.professor}</TD>
                    <TD>
                      {i.userEntity.userId}/{i.userEntity.userName}
                    </TD>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <TD>
                      {i.userEntity.userId}/{i.userEntity.userName}
                    </TD>
                  </tr>
                );
              }
            })
          )}
        </Table>
      </InnerWrapper>
    </Wrapper>
  );
}
export default AdminCheckRegisterPage;

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
  border: 0px;
  padding: 8px 0;
  margin: 0px;
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
  margin-bottom: auto;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;
