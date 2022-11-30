import React from "react";
import styled from "styled-components";


function AdminDeleteCourse(props){
    const courseItem = props.item;

    let deleteCourseButtonState = "";
    function deleteCourseButtonClicked() {
        deleteCourseButtonState = courseItem;
        console.log(deleteCourseButtonState);
    }
    return(
        <DeleteCourseButton onClick={deleteCourseButtonClicked}>
            과목 삭제
        </DeleteCourseButton>
    )
}

const DeleteCourseButton = styled.button`
    
`


export default AdminDeleteCourse;