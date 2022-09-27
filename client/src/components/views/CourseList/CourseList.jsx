import React,{} from 'react';
import CourseItem from './CourseItem';


function CourseList(props){

    return (
        <div>
            <table>
                <tr>
                    <td name="indexNumber">No.</td>
                    <td name="courseDepartment">개설학과</td>
                    <td name="courseGrade">학년</td>
                    <td name="courseName">교과목명</td>
                    <td name="courseNumber">과목번호</td>
                    <td name="courseDistribution">분반</td>
                    <td name="courseClassification">이수구분</td>
                    <td name="courseCredit">학점</td>
                    <td name="courseMaxNumber">정원</td>
                    <td name="coursePreRequest">예비신청(비율)</td>
                    <td name="courseRequest">수강신청</td>
                    <td name="courseTime">수업시간</td>
                    <td name="courseProfessor">담당교수</td>
                    <td name="courseSortation">수업구분</td>
                    <td name="courseTheory">이론</td>
                    <td name="coursePractice">실습</td>
                    <td name="courseArea">영역</td>
                    <td name="courseNote">비고</td>
                </tr>
                <CourseItem/>
            </table>
        </div>
    );
}

export default CourseList;