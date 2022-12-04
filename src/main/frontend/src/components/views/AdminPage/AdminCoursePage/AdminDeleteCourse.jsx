import React from "react";
import styled from "styled-components";

function AdminDeleteCourse(props) {
  const courseItem = props.item;

  let deleteCourseButtonState = "";
  function deleteCourseButtonClicked() {
    deleteCourseButtonState = courseItem;
    console.log(deleteCourseButtonState);
    // 여기에 과목 삭제 axios 추가
  }
  return (
    <DeleteCourseButton onClick={deleteCourseButtonClicked}>
      과목삭제
    </DeleteCourseButton>
  );
}

const DeleteCourseButton = styled.button`
  display: flex;
  font-size: 11px;
  padding: 2.2px;
  border: 1px solid #111;
  border-radius: 4px;
  margin: auto;
`;

export default AdminDeleteCourse;
