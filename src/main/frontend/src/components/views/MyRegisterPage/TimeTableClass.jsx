import React from "react";
import styled from "styled-components";

function TimeTableClass(props) {
  const item = props.item;

  // 과목 시간 정보에서 요일 추출
  function checkDay(subject_time) {
    const day = "월화수목금";
    return day.indexOf(subject_time[0]);
  }

  // 과목 시간 정보에서 강의 시간(몇 교시인지) 추출
  function checkTime(subject_time) {
    // subject_time = subject_time.replace(/,/g, "");
    subject_time = subject_time.substr(1);
    return subject_time;
  }
  function getBgColor(subjectId) {
    const colorList = [
      "#ffb0b0",
      "#ffff80",
      "#b0ffb0",
      "#b0ffff",
      "#ffb0ff",
      "#b0b0ff",
      "#ffd0b0",
      "#d0b0ff",
      "#b0d0ff",
      "#ffb0d0",
      "#d0ffb0",
      "#b0ffd0",
    ];
    return colorList[subjectId % colorList.length];
  }

  return (
    <ClassDiv
      style={{
        left: `${20 + checkDay(item.subject_time) * 16}%`,
        top: `${7 + 10.3 * (checkTime(item.subject_time)[0] - 1)}%`,
        height: `${checkTime(item.subject_time).length * 10.4}%`,
        backgroundColor: `${getBgColor(item.subjectId)}`,
      }}
    >
      {item.subject_name}
      <br />
      <br />
      {item.subject_time}
      <br />
    </ClassDiv>
  );
}

export default TimeTableClass;

const ClassDiv = styled.div`
  display: flex;
  position: absolute;
  width: 16%;
  transition: 0.4s ease;
  opacity: 0.6;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
