// 시간표 위에 뜨는 과목 별 영역
import React from "react";
import styled from "styled-components";

const ClassDiv = styled.div`
  display: flex;
  position: absolute;
  width: 16%;
  background-color: #ffcc1d;
  transition: 0.4s ease;
  opacity: 0.6;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

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

  return (
    <ClassDiv
      style={{
        left: `${20 + checkDay(item.subject_time) * 16}%`,
        top: `${7 + 10.3 * (checkTime(item.subject_time)[0] - 1)}%`,
        height: `${checkTime(item.subject_time).length * 10.4}%`,
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
