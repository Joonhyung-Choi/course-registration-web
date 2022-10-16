// 시간표 컴포넌트

import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px;
    text-align: center;
    position: static;
`

const Table = styled.table`
    padding: 0;
    margin: auto;
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    background-color: #fffffb8e;
    position: static;
    
`

const Tr = styled.tr`
    padding: 0;
    margin: 0;
    border: 1px solid;
`

const TdDay = styled.td`
    width: 10vw;
    height: 2vw;
    padding: 0;
    border: 1px solid;
`

const Th = styled.th`
    width: 10vw;
    border: 1px solid;
`

const Td = styled.td`
    width: 10vw;
    height: 3vw;
    padding: 0;
    border: 1px solid;
`

const ClassTest = styled.div`
    margin: 10px auto;
    padding: 10px;
    border: 1px solid;
    width: 50%;
`

// ===== 시간표 컴포넌트 =====

function TimeTable(props) {

    // 시간표에 띄울 각 과목 별 div (수강신청하면 시간표 UI에 실시간으로 추가되는 그거)
    let displayTableClass = props.currentClass.map(function(element){

        // 과목 시간 정보에서 요일 추출
        function checkDay(courseTime) {
            const day = '월화수목금'
            return day.indexOf(courseTime[0]);
        }

        // 과목 시간 정보에서 강의 시간(몇 교시인지) 추출
        function checkTime(courseTime) {
            courseTime = courseTime.substr(0,courseTime.indexOf('('));
            courseTime = courseTime.replace(/,/g, '');
            courseTime = courseTime.substr(1);
            return courseTime;
        }

        return(
            // CSS 스타일 애지게 긴데 나중에 디자인 확정되면 분리할 것
            <div style={{position: `absolute`, left: `${props.xPosition/2+30+checkDay(element.courseTime)*10}vw`, top: `${1.6+3*checkTime(element.courseTime)[0]}vw`, width: `10vw`, height: `${3*(checkTime(element.courseTime).length)}vw`,border: `1px solid orange`, backgroundColor: `#fffdad`, transition: `0.4s ease`, overflow: `hidden`}}>
                {element.courseName}<br/>{element.courseTime}<br/>
            </div>
        )
    })


    return (
        <Wrapper>
            <Table>
                <Tr>
                    <Th>시간</Th>
                    <TdDay>월요일</TdDay>
                    <TdDay>화요일</TdDay>
                    <TdDay>수요일</TdDay>
                    <TdDay>목요일</TdDay>
                    <TdDay>금요일</TdDay>
                </Tr>
                <Tr>
                    <Th>1교시<br/>09:00~09:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>2교시<br/>10:00~10:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>3교시<br/>11:00~11:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>4교시<br/>12:00~12:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>5교시<br/>13:00~13:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>6교시<br/>14:00~14:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>7교시<br/>15:00~15:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>8교시<br/>16:00~16:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>9교시<br/>17:00~17:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Th>10교시<br/>18:00~18:50</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Table>
            {displayTableClass}
        </Wrapper>
    );

}

export default TimeTable;

