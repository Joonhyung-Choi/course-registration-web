import React from "react";
import styled from "styled-components";

function TimeTableClass(props) {
  const item = props.item;

  function checkDay(subject_time) {
    const day = "월화수목금";
    return day.indexOf(subject_time[0]);
  }
  function checkTime(subject_time) {
    subject_time = subject_time.substr(1);
    return subject_time;
  }

  return (
    <ClassDiv
      style={{
        left: `${20 + checkDay(item.subject_time) * 15.95}%`,
        top: `${10 + 10 * (checkTime(item.subject_time)[0] - 1)}%`,
        height: `${checkTime(item.subject_time).length * 10.1}%`,
      }}
    ></ClassDiv>
  );
}

export default TimeTableClass;

const ClassDiv = styled.div`
  position: absolute;
  width: 16%;
  background-color: rgba(255, 204, 29, 0.5);
  transition: 0.4s ease;
  overflow: hidden;
`;
