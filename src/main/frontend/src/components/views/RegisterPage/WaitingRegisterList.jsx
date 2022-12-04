import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  userInfoState,
  courseListState,
  userRegisterState,
  waitingRegisterState,
} from "../../recoil/userDataStates";
import axios from "axios";
import WaitingRegisterItem from "./WaitingRegisterItem";

function WaitingRegisterList() {
  const userInfoG = useRecoilValue(userInfoState);
  const courseListG = useRecoilValue(courseListState);
  const userRG = useRecoilValue(userRegisterState);
  const [waitingRG, setWaitingRG] = useRecoilState(waitingRegisterState);

  useEffect(() => {
    axios.get("/api/getWaitingList").then((res) => {
      console.log(res.data);
      setWaitingRG(res.data);
    });
  }, [courseListG, userRG]);

  return (
    <Wrapper>
      <PrevScore>
        <P>수강신청학점: {userInfoG.userScoreDefault}</P>
        <P>수강신청가능학점: {userInfoG.userScore}</P>
      </PrevScore>
      <Table>
        <Tr>
          <Th name="id" style={{ borderTopLeftRadius: "15px" }}>
            No.
          </Th>
          <Th name="major">개설학과</Th>
          <Th name="grade">학년</Th>
          <Th name="subject_name">과목이름</Th>
          <Th name="subjectId">과목코드</Th>
          <Th name="subject_type">이수구분</Th>
          <Th name="score">학점</Th>
          <Th name="max_count">정원</Th>
          <Th name="register_count">수강신청인원</Th>
          <Th name="waitNum">대기열</Th>
          <Th name="subject_time">수업시간</Th>
          <Th name="professor">담당교수</Th>
          <Th style={{ borderTopRightRadius: "15px" }}>대기취소</Th>
        </Tr>
        {waitingRG.map((item, idx) => {
          return <WaitingRegisterItem item={item} idx={idx} />;
        })}
      </Table>
    </Wrapper>
  );
}

export default WaitingRegisterList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 20px);
  overflow: auto;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  overflow-y: auto;
  overflow-x: visible;
  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    border-radius: 10px;
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
const PrevScore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 13px;
`;
const P = styled.p`
  font-size: 12px;
  margin-right: 20px;
`;
const Table = styled.table`
  width: 100%;
  background-color: white;
  margin: 0px;
  padding: 0px;
  border-spacing: 0px;
  border-style: none;
  align-items: center;
  text-align: center;
`;
const Tr = styled.tr`
  width: 100%;
  align-items: center;
  text-align: center;
`;
const Th = styled.th`
  padding: 0.45vw;
  padding-bottom: 0.23vw;
  margin: 0px;
  font-size: 13.5px;
  font-weight: normal;
  background-color: #ffcc1d;
  color: #ffffff;
  border: 0px;
  position: sticky;
  top: 0;
  align-items: center;
`;
