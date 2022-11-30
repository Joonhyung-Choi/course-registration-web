import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  userPrevRegisterState,
  prevRegisterFilteringState,
  courseListState,
} from "../../recoil/userDataStates";
import PrevRegisterItem from "./PrevRegisterItem";

function PrevRegisterList() {
  const courseListG = useRecoilValue(courseListState);
  const userPRG = useRecoilValue(userPrevRegisterState);
  const filteringPRG = useRecoilValue(prevRegisterFilteringState);

  // filteringPRG와 userPRG 겹치는 item 제거
  const [tempPR, setTempPR] = useState(
    filteringPRG.filter(
      (item) => !userPRG.map((item) => item.subjectId).includes(item.subjectId)
    )
  );
  useEffect(() => {
    setTempPR(
      filteringPRG.filter(
        (item) =>
          !userPRG.map((item) => item.subjectId).includes(item.subjectId)
      )
    );
  }, [filteringPRG, userPRG]);

  return (
    <Wrapper>
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
          <Th name="prev_register_count">예비수강신청인원</Th>
          <Th name="subject_time">수업시간</Th>
          <Th name="professor">담당교수</Th>
          <Th style={{ borderTopRightRadius: "15px" }}>수강신청</Th>
        </Tr>
        {tempPR.map((item, idx) => {
          return <PrevRegisterItem item={item} idx={idx} />;
        })}
      </Table>
    </Wrapper>
  );
}

export default PrevRegisterList;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 28px);
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
