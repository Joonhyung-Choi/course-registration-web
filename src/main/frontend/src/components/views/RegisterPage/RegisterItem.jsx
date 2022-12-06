import React from "react";
import styled from "styled-components";
import axios from "axios";
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

function RegisterItem(props) {
  const setCurrentErrorG = useSetRecoilState(currentErrorState);
  const setUserInfoG = useSetRecoilState(userInfoState);
  const setUserPRG = useSetRecoilState(userPrevRegisterState);
  const setCourseListG = useSetRecoilState(courseListState);
  const [userRG, setUserRG] = useRecoilState(userRegisterState);
  const setMyRegisterSwitchG = useSetRecoilState(myRegisterSwitchState);

  let registerBtnValue = {};
  const registerButtonClicked = async () => {
    registerBtnValue = props.item;
    let time = [];
    userRG.map(async (item) => {
      if (registerBtnValue.subject_time[0] === item.subject_time[0]) {
        let timeBtn = [...registerBtnValue.subject_time];
        let timeUserRG = [...item.subject_time];
        time = time.concat(
          timeUserRG.slice(1).filter((t) => timeBtn.slice(1).includes(t))
        );
      }
    });
    if (time.length !== 0) {
      setCurrentErrorG(["겹치는 시간이 존재합니다.", true]);
      setTimeout(function () {
        setCurrentErrorG(["겹치는 시간이 존재합니다.", false]);
      }, 2000);
    } else {
      await axios
        .post("/api/subjectPost", {
          id: registerBtnValue.id,
          major: registerBtnValue.major,
          subject_name: registerBtnValue.subject_name,
          grade: registerBtnValue.grade,
          subjectId: registerBtnValue.subjectId,
          subject_type: registerBtnValue.subject_type,
          score: registerBtnValue.score,
          max_count: registerBtnValue.max_count,
          register_count: registerBtnValue.register_count,
          subject_time: registerBtnValue.subject_time,
          professor: registerBtnValue.professor,
        })
        .then((res) => {
          setUserInfoG(res.data);
          if (registerBtnValue.register_count === registerBtnValue.max_count) {
            setCurrentErrorG(["대기신청 되었습니다.", true]);
            setTimeout(function () {
              setCurrentErrorG(["대기신청 되었습니다.", false]);
            }, 2000);
              setMyRegisterSwitchG(false);
          } else if(registerBtnValue.register_count < registerBtnValue.max_count){
              setMyRegisterSwitchG(true);
          }
        })
        .catch(function (error) {
          console.log("RegisterBtn Error");
          console.log(error);
          setCurrentErrorG([error.response.data.errorMessage, true]);
          setTimeout(function () {
            setCurrentErrorG([error.response.data.errorMessage, false]);
          }, 2000);
          axios
            .get("/api/courseListGet")
            .then((res) => setCourseListG(res.data.content));
          axios.get("/api/prevGet").then((res) => setUserPRG(res.data));
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
        <RegisterButtonInput
          type="button"
          value="수강신청"
          onClick={registerButtonClicked}
        />
      </Td>
    </Tr>
  );
}

export default RegisterItem;

const Tr = styled.tr``;
const Td = styled.td`
  border: 0px;
  padding: 4px 0;
  margin: 0px;
  font-size: 12px;
  background-color: #ffffff;
  border-bottom: 1px solid #aaaaaa;
`;
const RegisterButtonInput = styled.input`
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
