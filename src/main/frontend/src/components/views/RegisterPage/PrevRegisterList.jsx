import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  courseListState,
  userPrevRegisterState,
  userRegisterState,
  waitingRegisterState,
} from "../../recoil/userDataStates";
import styled from "styled-components";
import PrevRegisterItem from "./PrevRegisterItem";

function PrevRegisterList() {
  const courseListG = useRecoilValue(courseListState);
  const userPRG = useRecoilValue(userPrevRegisterState);
  const userRG = useRecoilValue(userRegisterState);
  const waitingRG = useRecoilValue(waitingRegisterState);

  const [tempPR, setTempPR] = useState(
    userPRG
      .filter(
        (item) => !userRG.map((item) => item.subjectId).includes(item.subjectId)
      )
      .filter(
        (item) =>
          !waitingRG.map((item) => item.subjectId).includes(item.subjectId)
      )
  );
  const [tempPR_t, setTempPR_t] = useState(
    tempPR.map((item) => {
      return {
        ...item,
        register_count: courseListG.filter(
          (i) => i.subjectId === item.subjectId
        )[0].register_count,
        waitingCount: courseListG.filter(
          (i) => i.subjectId === item.subjectId
        )[0].waitingCount,
      };
    })
  );
  useEffect(() => {
    setTempPR(
      userPRG
        .filter(
          (item) =>
            !userRG.map((item) => item.subjectId).includes(item.subjectId)
        )
        .filter(
          (item) =>
            !waitingRG.map((item) => item.subjectId).includes(item.subjectId)
        )
    );
    setTempPR_t(
      tempPR.map((item) => {
        return {
          ...item,
          register_count: courseListG.filter(
            (i) => i.subjectId === item.subjectId
          )[0].register_count,
          waitingCount: courseListG.filter(
            (i) => i.subjectId === item.subjectId
          )[0].waitingCount,
        };
      })
    );
  }, [courseListG, userPRG, userRG, waitingRG]);

  return (
    <Wrapper>
      <Table>
        <Tr>
          <Th name="id" style={{ borderTopLeftRadius: "15px" }}>
            No.
          </Th>
          <Th name="major">????????????</Th>
          <Th name="grade">??????</Th>
          <Th name="subject_name">????????????</Th>
          <Th name="subjectId">????????????</Th>
          <Th name="subject_type">????????????</Th>
          <Th name="score">??????</Th>
          <Th name="max_count">??????</Th>
          <Th name="register_count">??????????????????</Th>
          <Th name="allWait">?????????</Th>
          <Th name="subject_time">????????????</Th>
          <Th name="professor">????????????</Th>
          <Th style={{ borderTopRightRadius: "15px" }}>????????????</Th>
        </Tr>
        {tempPR_t.map((item, idx) => {
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
  margin-top: 28px;
  padding: 0px;
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
`;
