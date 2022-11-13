import React, {useState} from 'react';
import styled from 'styled-components';

import TimeTable from './TimeTable';
import CourseList from './CourseList';

const Wrapper = styled.div`
height: 96.5vh;
border: 0px;
box-sizing: border-box;
margin: 0px;
padding: 0px;
background-color: white;
z-index: 100;
transition: 0.4s ease;
`;

// ===== 수강신청 페이지(프로토타입) 메인 컴포넌트 =====
function RegisterPage(props) {

    // 유저가 현재 수강신청한 교과목 목록 배열
    const [currentClass, setCurrentClass] = useState([]);

    // 교과목 신청 시 배열에 해당 교과목 추가
    const addClass = (newClass) => {
        setCurrentClass(prevClasses => [...prevClasses, newClass])
    }

    // 교과목 신청 취소 시 배열에서 해당 교과목 제거
    const delClass = (indexNumber) => {
        setCurrentClass(currentClass.filter(currentClass => currentClass.indexNumber !== indexNumber))
    }


    return (
        <Wrapper style={{ width: `${100+props.xPosition}vw`}}>
            <TimeTable currentClass={currentClass} xPosition={props.xPosition}/>
            <CourseList addClass={addClass} delClass={delClass} currentClass={currentClass}/>
        </Wrapper>
    );

}

export default RegisterPage;