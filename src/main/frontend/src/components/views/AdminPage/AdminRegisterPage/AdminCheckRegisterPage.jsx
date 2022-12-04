import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  currentAdminPageState,
  registerDataState,
} from "../../../recoil/adminDataStates";
import AdminCheckRegister from "./AdminCheckRegister";

function AdminCheckRegisterPage() {
  const location = useLocation();
  const [currentPageG, setCurrentPageG] = useRecoilState(currentAdminPageState);
  const [registerDataG, setRegisterDataG] = useRecoilState(registerDataState);


  let tempSubjectName = [];


  // 선생님 이거 useEffect 안에 같은 코드가 있어요
  registerDataG.map((item, idx) => {
    if (
      !tempSubjectName.map((i) => i.subject_name).includes(item.subject_name)
    ) {
      tempSubjectName.push({grade: item.grade,
        major:item.major,
        max_count: item.max_count,
        professor: item.professor,
        register_count: item.register_count,
        score: item.score,
        subjectId: item.subjectId,
        subject_name: item.subject_name,
        subject_time: item.subject_time,
        subject_type: item.subject_type,
        user: [] });
    }
    tempSubjectName.map((i, idx) => {
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

    // 선생님 이거 useEffect 밖에 같은 코드가 있어요
    registerDataG.map((item, idx) => {
      if (
        !tempSubjectName.map((i) => i.subject_name).includes(item.subject_name)
      ) {
        tempSubjectName.push({grade: item.grade,
          major:item.major,
          max_count: item.max_count,
          professor: item.professor,
          register_count: item.register_count,
          score: item.score,
          subjectId: item.subjectId,
          subject_name: item.subject_name,
          subject_time: item.subject_time,
          subject_type: item.subject_type,
          user: [] });
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
    console.log(tempSubjectName);




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
            <TH style={{ borderTopRightRadius: "6px" }}>수강인원확인</TH>
          </tr>
          {/* 추가 버튼의 td태그는 <TD_H></TD_H>로!! */}
          {tempSubjectName.map((item) => (
            <tr>
              <TD>{item.major}</TD>
              <TD>{item.grade}</TD>
              <TD>{item.subject_name}</TD>
              <TD>{item.subjectId}</TD>
              <TD>{item.subject_type}</TD>
              <TD>{item.score}</TD>
              <TD>{item.max_count}</TD>
              <TD>{item.register_count}</TD>
              <TD>{item.subject_time}</TD>
              <TD>{item.professor}</TD>
              <TD style={{ padding: "5.2px 0" }}>
                <AdminCheckRegister user={item.user}>수강확인</AdminCheckRegister>
              </TD>


            </tr>
          ))}
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
  margin-bottom: auto;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;
//추가버튼css입니당 이름만 바꿔서 쓰세요~
const SignInButton = styled.button`
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


const CheckRegisterButton = styled.button`
  display: flex;
  font-size: 11px;
  padding:2.2px;
  border: 1px solid #111;
  border-radius: 4px;
  margin:auto;
`;
