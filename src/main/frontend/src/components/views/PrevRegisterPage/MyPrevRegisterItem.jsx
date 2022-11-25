import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  userInfoState,
  courseListState,
  userPrevRegisterState,
} from "../../recoil/userDataStates";
import { currentErrorState } from "../../recoil/currentStates";
import axios from "axios";

function MyPrevRegisterItem(props) {
  const [userInfoG, setUserInfoG] = useRecoilState(userInfoState);
  const [userPRG, setUserPRG] = useRecoilState(userPrevRegisterState);
  const [courseListG, setCourseListG] = useRecoilState(courseListState);
  const [currentErrorG, setCurrentErrorG] = useRecoilState(currentErrorState);

  let myPrevBtnValue = {};

  const registerButtonClicked = async () => {
    myPrevBtnValue = props.item;
    await axios
      .post("/api/prevDelete", { subjectId: myPrevBtnValue.subjectId })
      .then((res) => setUserInfoG(res.data))
      .catch(function (error) {
        console.log("MyPrevBtn Error");
        console.log(error);
        setCurrentErrorG([error.response.data.errorMessage, true]);
        setTimeout(function () {
          setCurrentErrorG([error.response.data.errorMessage, false]);
        }, 2000);
      });
    await axios.get("/api/prevGet").then((res) => setUserPRG(res.data));
    await axios
      .get("/api/courseListGet")
      .then((res) => setCourseListG(res.data.content));
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
      <Td name={props.item.subject_time}>{props.item.subject_time}</Td>
      <Td name={props.item.professor}>{props.item.professor}</Td>
      <Td>
        <CancelButtonInput
          type="button"
          value="수강취소"
          onClick={registerButtonClicked}
        />
      </Td>
      {/* <Td name={props.item.courseSortation}></Td>
            <Td name={props.item.courseClassification}></Td>
            <Td name={props.item.courseDistribution}></Td>
            <Td name={props.item.coursePreRequest}></Td>
            <Td name={props.item.courseTheory}></Td>
            <Td name={props.item.coursePractice}></Td>
            <Td name={props.item.courseNote}></Td> */}
    </Tr>
  );
}

export default MyPrevRegisterItem;

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
