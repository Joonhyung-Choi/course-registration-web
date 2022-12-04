import React from "react";
import styled from "styled-components";

function AdminModifyCourse(props) {
  const courseItem = props.item;

  let ModifyCourseButtonState = "";
  function modifyCourseButtonClicked() {
    ModifyCourseButtonState = courseItem;
    console.log(ModifyCourseButtonState);
    // 여기에 과목 수정 axios 추가
  }
  return (
    <ModifyCourseButton onClick={modifyCourseButtonClicked}>
      과목수정
    </ModifyCourseButton>
  );
}

const ModifyCourseButton = styled.button`
  display: flex;
  font-size: 11px;
  padding:2.2px;
  border: 1px solid #111;
  border-radius: 4px;
  margin:auto;
`;

export default AdminModifyCourse;
