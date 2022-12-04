import React from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  userInfoState,
  courseListState,
  userPrevRegisterState,
  userRegisterState,
} from "../../recoil/userDataStates";
import {
  currentErrorState,
  myRegisterSwitchState,
} from "../../recoil/currentStates";
import axios from "axios";
import styled from "styled-components";

function MyRegisterItem(props) {
  const setCurrentErrorG = useSetRecoilState(currentErrorState);
  const setUserInfoG = useSetRecoilState(userInfoState);
  const setCourseListG = useSetRecoilState(courseListState);
  const setUserPRG = useSetRecoilState(userPrevRegisterState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  const setMyRegisterSwitchG = useSetRecoilState(myRegisterSwitchState);

  let prevBtnValue = {};
  const prevRegisterButtonClicked = async () => {
    prevBtnValue = props.item;
    let time = [];
    userRG.map(async (item) => {
      if (prevBtnValue.subject_time[0] === item.subject_time[0]) {
        let timeUserRG = [...item.subject_time];
        let timeBtn = [...prevBtnValue.subject_time];
        time = time.concat(
          timeUserRG.slice(1).filter((t) => timeBtn.slice(1).includes(t))
        );
      }
    });
    if (time.length !== 0) {
      setCurrentErrorG(["겹치는 시간", true]);
      setTimeout(function () {
        setCurrentErrorG(["겹치는 시간", false]);
      }, 2000);
      return;
    } else {
      await axios
        .post("/api/subjectPost", {
          id: prevBtnValue.id,
          major: prevBtnValue.major,
          subject_name: prevBtnValue.subject_name,
          grade: prevBtnValue.grade,
          subjectId: prevBtnValue.subjectId,
          subject_type: prevBtnValue.subject_type,
          score: prevBtnValue.score,
          max_count: prevBtnValue.max_count,
          register_count: prevBtnValue.register_count,
          subject_time: prevBtnValue.subject_time,
          professor: prevBtnValue.professor,
        })
        .then((res) => {
          setUserInfoG(res.data);
          if (prevBtnValue.register_count === prevBtnValue.max_count) {
            setCurrentErrorG(["대기신청 되었습니다.", true]);
            setTimeout(function () {
              setCurrentErrorG(["대기신청 되었습니다.", false]);
            }, 2000);
          }
          setMyRegisterSwitchG(false);
        })
        .catch(function (error) {
          console.log(prevBtnValue);
          console.log("PrevBtn Error");
          console.log(error);
          setCurrentErrorG([error.response.data.errorMessage, true]);
          setTimeout(function () {
            setCurrentErrorG([error.response.data.errorMessage, false]);
          }, 2000);
        });
      await axios.get("/api/subjectGet").then((res) => setUserRG(res.data));
      await axios
        .get("/api/courseListGet")
        .then((res) => setCourseListG(res.data.content));
      await axios.get("/api/prevGet").then((res) => setUserPRG(res.data));
    }
  };

  return (
    <Tr>
      <Td name={props.idx}>{props.idx + 1}</Td>
      <Td name={props.item.major}>{props.item.major}</Td>
      <Td name={props.item.grade}>{props.item.grade}</Td>
      <Td name={props.item.subject_name}>{props.item.subject_name}</Td>
      <Td name={props.item.subjectId}>{props.item.subjectId}</Td>
      <Td name={props.item.subject_type}>{props.item.subject_type}</Td>
      <Td name={props.item.score}>{props.item.score}</Td>
      <Td name={props.item.max_count}>{props.item.max_count}</Td>
      <Td name={props.item.register_count}>
        {props.item.register_count}&nbsp;(
        {((props.item.register_count / props.item.max_count) * 100).toFixed(2)}
        %)
      </Td>
      <Td name={props.item.waitingCount}>
        {props.item.waitingCount - props.item.register_count}/
        {Math.round(props.item.max_count * 0.5)}
      </Td>
      <Td name={props.item.subject_time}>{props.item.subject_time}</Td>
      <Td name={props.item.professor}>{props.item.professor}</Td>
      <Td>
        <CancelButtonInput
          type="button"
          value="수강신청"
          onClick={prevRegisterButtonClicked}
        />
      </Td>
    </Tr>
  );
}

export default MyRegisterItem;

const Tr = styled.tr``;
const Td = styled.td`
  border: 0px;
  padding: 4px 0;
  margin: 0px;
  font-size: 12px;
  background-color: #ffffff;
  border-bottom: 1px solid #aaaaaa;
`;
const CancelButtonInput = styled.input`
  border-radius: 7px;
  background-color: rgb(253, 243, 215);
  color: #313131;
  font-size: 8px;
  padding: 5px;
  border: none;
  box-shadow: 1px 1px 1px #31313157;
  &:active {
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`;
